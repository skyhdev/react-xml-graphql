import React from 'react'
import { useTranslation } from 'react-i18next';
import Layout from '../shared/Layout';

const Suppliers = () => {
    const { t } = useTranslation();
    return (
        <Layout active="Suppliers">
            Suppliers
        </Layout>
    )
}

export default Suppliers
