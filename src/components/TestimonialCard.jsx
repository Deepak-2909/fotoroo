const TestimonialCard = ({ image, name, text, rating }) => {
    return (
      <div className="bg-transparent border border-textCol rounded-lg shadow p-4 w-60 flex-shrink-0">
        <div className="flex justify-between gap-4 mb-4">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 object-cover"
          />
          <div className="flex ">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`${
                index < rating ? "text-yellow-500" : "text-gray-300"
              } text-lg`}
            >
              ★
            </span>
          ))}
        </div>
        </div>
        <h1 className="-mt-3 ">{name}</h1>
        <p className="text-sm text-gray-600 my-4">{text}</p>
        
      </div>
    );
  };

  export default TestimonialCard