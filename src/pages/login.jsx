import { Header } from "../components/header"
import { motion } from "framer-motion"

export const Login = () => {
    const handleSubmit = () => {
        alert('Login com sucesso!');
    };
    return (
        <body >
        <Header/>
        
        <main>
        <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-3xl mx-auto p-6 mt-10 rounded-lg shadow-lg flex-1"
                >
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Login Page </h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                       
                        <motion.div
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col"
                        >
                            <label htmlFor="email" className="text-gray-700 font-semibold ">E-mail:</label>
                            <input type="email" id="email" name="email" required placeholder="Digite seu e-mail" className="border-gray-300 border hover:bg-black/5 transition-all duration-300 ease-in-out p-2 rounded mt-1" />
                        </motion.div>
                        <motion.div
                            initial={{ x: '-100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-col"
                        >
                            <label htmlFor="Password" className="text-gray-700 font-semibold">Password:</label>
                            <input type="password" id="password" name="password" required placeholder="Digite sua Password" className="border-gray-300 border hover:bg-black/5 transition-all duration-300 ease-in-out p-2 rounded mt-1" />
                        </motion.div>

                        <motion.button
                            type="submit"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors duration-300 mt-4"
                        >
                            Entrar
                        </motion.button>
                    </form>
                </motion.div>
        </main>
        <aside>

        </aside>
    </body>
    )
}