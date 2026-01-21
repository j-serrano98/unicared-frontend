export default function PersonalInfo() {

    return (

        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">2. Datos Personales</h2>
                <form action="#">
                    <div className="grid gap-4 grid-cols-10 gap-6">
                        <div className="col-span-5 gap-6">
                            <div className="col-span-5">
                                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre*</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required=""/>
                            </div>
                            <div className="flex justify-between w-full gap-6 my-6">
                                <div className="w-100">
                                    <label for="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de Nacimiento (opcional)</label>
                                    <input type="date" name="item-weight" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="12" required=""/>
                                </div> 
                                <div className="w-100">
                                    <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero de Contacto (opcional)</label>
                                    <input type="phone" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""/>
                                </div>
                            </div>
                            <div className="my-6">
                                <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Direccion (opcional)</label>
                                <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""/>
                            </div>
                            <div className="flex justify-between w-full gap-6 my-6">
                                <div className="w-full">
                                    <label for="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provincia (opcional)</label>
                                    <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option selected="">Select category</option>
                                        <option value="TV">TV/Monitors</option>
                                        <option value="PC">PC</option>
                                        <option value="GA">Gaming/Console</option>
                                        <option value="PH">Phones</option>
                                    </select>
                                </div>
                                <div className="w-full">
                                    <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website personal (opcional)</label>
                                    <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""/>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-5">
                            <div className="sm:col-span-2">
                                <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Biografia (opcional)</label>
                                <textarea id="description" rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                            </div>
                            <div className="flex justify-between w-full gap-6 my-6">
                                <div className="w-full">
                                    <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Linkedin URL (opcional)</label>
                                    <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""/>
                                </div>
                                <div className="w-full">
                                    <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Facebook (opcional)</label>
                                    <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""/>
                                </div>
                            </div>
                            <div className="flex justify-between w-full gap-6 my-6">
                                <div className="w-full">
                                    <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Github (opcional)</label>
                                    <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""/>
                                </div>
                                <div className="w-full">
                                    <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Instagram (opcional)</label>
                                    <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Product brand" required=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}