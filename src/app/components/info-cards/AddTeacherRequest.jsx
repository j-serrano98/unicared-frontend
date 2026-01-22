export default function AddTeacherRequests() {
    return (
        <div className="w-full max-w-sm p-4 sm:p-6 bg-neutral-primary-soft border border-default rounded-base shadow-xs rounded-lg">
            <h5 className="mb-2 text-base md:text-xl font-semibold text-heading">No encuentras un profesor?</h5>
            <p className="text-body">Llena nuestro formulario con la informacion del docente, para que lo agreguemos a la lista.</p>
            <ul className="my-6 space-y-3">
                <li>
                    <a href="https://forms.gle/QayojbHMKjdnAYci9" target="_blank" className="flex items-center p-3 text-lg font-semibold text-heading rounded-base bg-neutral-secondary-medium hover:bg-neutral-tertiary-medium group">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24"><path fill="purple" d="M14.727 6h6l-6-6v6zm0 .727H14V0H4.91c-.905 0-1.637.732-1.637 1.636v20.728c0 .904.732 1.636 1.636 1.636h14.182c.904 0 1.636-.732 1.636-1.636V6.727h-6zM7.91 17.318a.819.819 0 1 1 .001-1.638a.819.819 0 0 1 0 1.638zm0-3.273a.819.819 0 1 1 .001-1.637a.819.819 0 0 1 0 1.637zm0-3.272a.819.819 0 1 1 .001-1.638a.819.819 0 0 1 0 1.638zm9 6.409h-6.818v-1.364h6.818v1.364zm0-3.273h-6.818v-1.364h6.818v1.364zm0-3.273h-6.818V9.273h6.818v1.363z"/></svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">Llenar formulario</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}