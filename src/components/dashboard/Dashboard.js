import React from 'react'
import { useTranslation } from 'react-i18next';
import Layout from '../shared/Layout';

const Dashboard = () => {
    const { t } = useTranslation();
    return (
        <Layout active="Dashboard">
            Dashboard
        </Layout>
    )
}

export default Dashboard
