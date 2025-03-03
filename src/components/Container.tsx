interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <div className='mx-auto flex flex-col md:max-w-[1300px] lg:px-4'>
      <div className='border-b border-t-0 border-bgDark lg:border-x'>
        {children}
      </div>
    </div>
  );
};
