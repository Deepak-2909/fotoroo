from quart import Quart, jsonify, send_from_directory, request, make_response
# from google.oauth2 import service_account
# from googleapiclient.discovery import build
# from googleapiclient.errors import HttpError
import os
import uvicorn
import smtplib
from dotenv import load_dotenv

load_dotenv()

app = Quart(__name__)
app.secret_key = os.getenv("APP_KEY")

# Serve Static React Files
@app.route("/")
@app.route("/<path:path>")
async def serve_react(path="index.html"):
    build_dir = os.path.join(os.path.dirname(__file__), "dist")
    return await send_from_directory(build_dir, path)

# API Route
@app.route("/api/send_mail", methods=["POST"])
async def send_mail():
    form_data = await request.get_json()
    print(form_data)
    
    # creates SMTP session
    s = smtplib.SMTP('smtp.gmail.com', 587)
    # start TLS for security
    s.starttls()
    # Authentication
    s.login(os.getenv("SENDER_EMAIL"), os.getenv("PASSWORD"))
    # message to be sent
    message = f"Subject: Enquiry for {form_data['booth']}\n\n" + "Enquiry from: " + form_data["name"] + "\n" + "Email ID: " + form_data["email"] + "\n" + "Contanct Number: " + form_data["phone"] + "\n" + "Event Date: " + form_data["eventDate"] + "\n" + "Event Location: " + form_data["eventLocation"] + "\n" + "Message: " + form_data["message"] + "\n" + "Booth: " + form_data["booth"]
    # sending the mail
    s.sendmail(os.getenv("SENDER_EMAIL"), os.getenv("RECEIVER_EMAIL") , message)
    # terminating the session
    s.quit()
    return jsonify({"message": "Email sent successfully!"})

 

# Load your credentials JSON file
# credentials = service_account.Credentials.from_service_account_file(
#     './credentials.json',
#     scopes=['https://www.googleapis.com/auth/business.manage']
# )

# Initialize the API client
# service = build('mybusiness', 'v4', credentials=credentials)

# async def fetch_reviews(location_id):
#     try:
#         reviews = service.accounts().locations().reviews().list(
#             parent=f'accounts/{location_id}'
#         ).execute()
#         return reviews
#     except HttpError as error:
#         # Handle API errors
#         return {'error': error.resp.status, 'message': error._get_reason()}
#     except Exception as error:
#         # Handle other exceptions
#         return {'error': 'internal_error', 'message': str(error)}

# @app.route('/api/get_reviews')
# async def get_reviews():
#     location_id = os.getenv("LOCATION_ID")
#     reviews = await fetch_reviews(location_id)
#     if 'error' in reviews:
#         response = make_response(jsonify(reviews), 500)
#     else:
#         response = make_response(jsonify(reviews), 200)
#     return response

if __name__ == "__main__":
    # app.run()
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)
