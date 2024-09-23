
const reviews = [
  {
    vectorSrc: '/images/Vector.png',
    reviewText:
      'I used to dread managing my expenses and invoices. But ever since I started using this tool, it’s all handled seamlessly. My finances practically run themselves now, and it’s given me so much peace of mind!',
  },
  {
    vectorSrc:  '/images/Vector (1).png',
    reviewText:
      'This tool has been a game-changer for my business! Automating my finances has saved me hours each week. Now, I can focus on growing my business instead of stressing over spreadsheets. Highly recommend!',
  },
  {
    vectorSrc: '/images/Vector.png',
    reviewText:
      'No more juggling multiple accounts and bills. Everything is automated, and I finally have a clear picture of my financial health. This product has simplified everything, it’s like having a personal finance assistant on autopilot!',
  },
];


const reviews1 =  [
    {
      vectorSrc: '/images/Vector.png',
      reviewText:
        'I used to dread managing my expenses and invoices. But ever since I started using this tool, it’s all handled seamlessly. My finances practically run themselves now, and it’s given me so much peace of mind!',
    },
    {
      vectorSrc:  '/images/Vector (1).png',
      reviewText:
        'This tool has been a game-changer for my business! Automating my finances has saved me hours each week. Now, I can focus on growing my business instead of stressing over spreadsheets. Highly recommend!',
    },
    {
      vectorSrc: '/images/Vector.png',
      reviewText:
        'No more juggling multiple accounts and bills. Everything is automated, and I finally have a clear picture of my financial health. This product has simplified everything, it’s like having a personal finance assistant on autopilot!',
    },
  ];
  

export default function Review() {
    return (
      <div className='reviews-container'>
        <div className='reviews-scroll md:gap-x-11 gap-x-6'>
          {reviews.map((review, index) => (
            <div key={index} className='review md:max-w-[611px] max-md:w-80 flex-shrink-0 md:text-xl text-xs font-medium md:px-[48px] px-7 bg-[#F0F0F0] pb-[61px] md:pt-[81px] pt-12 rounded-[20px]'>
              <p>{review.reviewText}</p>
              <img src={review.vectorSrc} alt='vector' className='md:mt-[186px] mt-[105px]' />
            </div>
          ))}
          
          {reviews1.map((review, index) => (
            <div key={index} className='review md:max-w-[611px] max-md:w-80 md:text-xl text-xs font-medium md:px-[48px] px-7 bg-[#F0F0F0] pb-[61px] md:pt-[81px] pt-12 rounded-[20px]'>
              <p>{review.reviewText}</p>
              <img src={review.vectorSrc} alt='vector'  className='md:mt-[186px] mt-[105px]' />
            </div>
          ))}
            {reviews1.map((review, index) => (
            <div key={`dup-${index}`}className='review md:max-w-[611px] max-md:w-80 md:text-xl text-xs font-medium md:px-[48px] px-7 bg-[#F0F0F0] pb-[61px] md:pt-[81px] pt-12 rounded-[20px]'>
              <p>{review.reviewText}</p>
              <img src={review.vectorSrc} alt='vector'  className='md:mt-[186px] mt-[105px]'/>
            </div>
          ))}
                {reviews1.map((review, index) => (
            <div key={`dup-${index}`}className='review md:max-w-[611px] max-md:w-80 md:text-xl text-xs font-medium md:px-[48px] px-7 bg-[#F0F0F0] pb-[61px] md:pt-[81px] pt-12 rounded-[20px]'>
              <p>{review.reviewText}</p>
              <img src={review.vectorSrc} alt='vector'  className='md:mt-[186px] mt-[105px]'/>
            </div>
          ))}
        </div>
      </div>
    );
  }
