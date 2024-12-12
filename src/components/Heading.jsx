

const Heading = ({children}) => {
  return (
    <div className='text-center mt-20'>
     <h3 className='font-bold text-2xl md:text-3xl lg:text-4xl'>{children}</h3> 
    </div>
  );
};

export default Heading;