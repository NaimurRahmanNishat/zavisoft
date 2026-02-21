import Image from "next/image";
import author from "../../../public/author.png";
import image from "../../../public/image.png";

const reviews = [
  {
    id: 1,
    title: "Good Quality",
    desc: "I highly recommend shopping from kicks",
    author: author,
    rating: 5.0,
    image: image,
  },
  {
    id: 2,
    title: "Good Quality",
    desc: "I highly recommend shopping from kicks",
    author: author,
    rating: 5.0,
    image: image,
  },
  {
    id: 3,
    title: "Good Quality",
    desc: "I highly recommend shopping from kicks",
    author: author,
    rating: 5.0,
    image: image,
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-[#232321] text-sm font-medium ml-1">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

const Review = () => {
  return (
    <div className="w-full px-4 md:px-0 py-8 md:py-14 desktop">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 md:mb-10">
        <h2 className="text-[#232321] text-[32px] md:text-[74px] uppercase leading-[95%] font-bold font-rubik">
          Reviews
        </h2>
        <button className="px-5 md:px-7 h-10 md:h-12 flex items-center justify-center bg-[#4A69E2] hover:bg-[#3a59d2] transition rounded-xl uppercase font-medium text-[13px] md:text-[14px] tracking-[0.5px] leading-none text-white">
          See All
        </button>
      </div>

      {/* Reviews Cards */}
      <div
        className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none w-full"
      >
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl overflow-hidden flex flex-col min-w-full md:min-w-0 snap-center"
          >
            {/* Card Top */}
            <div className="px-5 md:px-6 pt-5 md:pt-6 pb-4 flex items-start justify-between gap-3">
              <div className="flex-1">
                <h3 className="text-[#232321] text-[18px] md:text-[20px] font-semibold font-rubik mb-1">
                  {review.title}
                </h3>
                <p className="text-[#232321] text-[13px] md:text-[14px] mb-4">
                  {review.desc}
                </p>
                <StarRating rating={review.rating} />
              </div>

              <Image
                src={review.author}
                alt="author"
                width={56}
                height={56}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full"
              />
            </div>

            {/* Card Bottom */}
            <div className="relative w-full h-52 md:h-64">
              <Image
                src={review.image}
                alt="review shoe"
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
