import Link from 'next/link'

export default function Button({url}){
    return (
        <div className="px-4 lg:px-0">
            <Link href={url} passHref>
                <a
                target="_blank"  
                aria-label="znajdź w księgarniach" 
                className="flex items-center w-fit p-3 my-10 bg-cerise-600 text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-submarine-500 hover:shadow-lg focus:bg-cerise-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cerise-700 active:shadow-lg transition duration-150 ease-in-out bottom-5 right-55">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <span className="ml-2 mr-1">Znajdź w księgarniach</span>
                </a>
            </Link>
        </div>
    )
}