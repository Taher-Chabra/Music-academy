'use client';

interface ThemeButtonProps {
   children: React.ReactNode;
   onClick: () => void
}

const ThemeButton: React.FC<ThemeButtonProps> = ({children, onClick}) => {

  return (
   <button 
   onClick={onClick}
   className="text-neutral-700 font-medium dark:text-neutral-200 hover:text-black "
   >
      {children}
   </button>
  )
}

export default ThemeButton
