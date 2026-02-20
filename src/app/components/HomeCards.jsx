
export default function HomeCards() {
    return (
    <section>
            <div className='container-xl lg:container m-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
                    
                    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                        <h2 className='text-2xl font-bold'>
                            Profesores  
                        </h2>
                        <p className='mt-2 mb-4'>
                            Descubre el profesor que mas se adapta a tu estilo de aprendizaje
                        </p>
                        <a href='/profesores' className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700 hover:cursor-pointer'>
                            Explorar Profesores
                        </a>
                    </div> 
                    <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
                        <h2 className='text-2xl font-bold'>
                            Materias
                        </h2>
                        <p className='mt-2 mb-4'>
                            Encuentra los mejores recursos para tus materias
                        </p>
                        {/* <Link href='/add-job' className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'> */}
                        <a href='/subjects' className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'>
                            Descubre Materias
                        </a>
                        {/* </Link> */}
                    </div> 
                </div>
            </div>
        </section>
  )
}