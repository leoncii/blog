import Image from 'next/image'
export const Space = () => {
  return (
    <>
      <Image
        src='https://res.cloudinary.com/djc1umong/image/upload/v1626451217/spaceMirando_nzw8aj.jpg'
        width={800}
        height={375}
        className='space'
        layout='intrinsic'
        objectFit='contain'
        alt='Mirando al espacio sideral sobre un campo verde y un fondo mágico'
        loading='lazy'
      />
      <style jsx global>{`
        @media only screen and (min-width: 787px) {
          .space {
            min-width: -webkit-fill-available;
          }
        }
      `}
      </style>
    </>
  )
}
