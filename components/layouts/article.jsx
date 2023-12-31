import { motion } from 'framer-motion';
import Head from 'next/head';
import { GridItemsStyle } from '../grid-item';

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 },
};

const Layout = ({ children, title }) => {
    return (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
            <>
                {title && (
                    <Head>
                        <title>{title} - Leonel Ortega</title>
                    </Head>
                )}
            </>
            {children}
            <GridItemsStyle />
        </motion.div>
    );
};

export default Layout;