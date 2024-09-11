
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
        <div className='reviews-scroll gap-x-11'>
          {reviews.map((review, index) => (
            <div key={index} className='review max-w-[611px] text-xl font-medium px-[48px] bg-[#F0F0F0] pb-[61px] pt-[81px] rounded-[20px]'>
              <p>{review.reviewText}</p>
              <img src={review.vectorSrc} alt='vector' className='mt-[186px]' />
            </div>
          ))}
          
          {reviews1.map((review, index) => (
            <div key={index} className='review max-w-[611px] text-xl font-medium px-[48px] bg-[#F0F0F0] pb-[61px] pt-[81px] rounded-[20px]'>
              <p>{review.reviewText}</p>
              <img src={review.vectorSrc} alt='vector' className='mt-[186px]' />
            </div>
          ))}
            {reviews1.map((review, index) => (
            <div key={`dup-${index}`} className='review max-w-[611px] text-xl font-medium px-[48px] bg-[#F0F0F0] pb-[61px] pt-[81px] rounded-[20px]'>
              <p>{review.reviewText}</p>
              <img src={review.vectorSrc} alt='vector' className='mt-[186px]' />
            </div>
          ))}
        </div>
      </div>
    );
  }
