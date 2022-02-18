
export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" flex flex-col items-center  bg-zinc-200 dark:bg-black min-h-screen">
   

      <main className="flex flex-col justify-center  bg-zinc-200 dark:bg-black  max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        {children}
      </main>

    </div>
  )
}

export default Layout