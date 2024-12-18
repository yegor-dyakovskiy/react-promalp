import { motion } from 'framer-motion';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Cards from './components/Cards/Cards';
import Lead from './components/Lead/Lead';
import Callme from './components/Callme/Callme';

function App() {
    // Настраиваем анимацию для секций
    const sectionVariants = {
        hidden: { opacity: 0, y: 20 }, // Начальное состояние
        visible: { opacity: 1, y: 0 }, // Конечное состояние
    };

    return (
        <>
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
            >
                <Header />
            </motion.div>
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <Banner />
            </motion.div>
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <Cards />
            </motion.div>
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 0.9 }}
            >
                <Lead />
            </motion.div>
            <motion.div
                variants={sectionVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6, delay: 1.2 }}
            >
                <Header />
            </motion.div>
            <Callme />
        </>
    );
}

export default App;
