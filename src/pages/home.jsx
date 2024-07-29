import { Header } from "../components/header"
import '../components/animations.css'
import BgVideo from "../Media/bgvideo.mp4"
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";


export const Home = () => {
    return (
        <body >
            <Header/>

            
            <main >
            <video src={BgVideo} autoPlay muted loop />
            <div className="bg-overlay text-white ">
                
                <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.0, delay: 0.2 }}
            className="flex flex-col items-center justify-center pt-64"
          >
            <h1 className="text-4xl font-bold text-white mb-4">Bem-vindo ao Meu Site</h1>
            <p className="text-lg text-white mb-8">Construído por Sueile Badrú</p>

            <Link to="/login">
              <button className="flex relative right-20 top-6 bg-black/60 text-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors duration-300">
              Sing In
              </button>
            </Link>
            <Link to="/singup">
              <button className="flex relative left-20 bottom-6 justify-center bg-black/60 text-blue-500 px-6 py-3 rounded-xl hover:bg-blue-600 hover:text-white transition-colors duration-300">
                Criar Conta
              </button>
              </Link>

           
          </motion.div> 


            </div>
            
            </main>
        
        </body>
    )
}