import React from 'react'
import DataTable from "@/components/DataTable";

export const CoinOverviewFallback = () => {
    return (
        <div id="coin-overview-fallback">
            <div className="header">
                <div className="header-image animate-pulse bg-dark-400" />
                <div className="info">
                    <div className="header-line-sm animate-pulse bg-dark-400 rounded" />
                    <div className="header-line-lg animate-pulse bg-dark-400 rounded" />
                </div>
            </div>

            <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="period-button-skeleton animate-pulse bg-dark-400" />
                ))}
            </div>

            <div className="chart">
                <div className="chart-skeleton animate-pulse bg-dark-400" />
            </div>
        </div>
    )
}

export const TrendingCoinsFallback = () => {
    const columns = [
        {
            header: 'Name',
            cell: () => (
                <div className="name-link">
                    <div className="name-image animate-pulse bg-dark-400" />
                    <div className="name-line animate-pulse bg-dark-400 rounded" />
                </div>
            )
        },
        {
            header: '24h Change',
            cell: () => (
                <div className="flex items-center gap-2">
                    <div className="change-icon animate-pulse bg-dark-400" />
                    <div className="value-skeleton-sm animate-pulse bg-dark-400 rounded" />
                </div>
            )
        },
        {
            header: 'Price',
            cell: () => (
                <div className="value-skeleton-md animate-pulse bg-dark-400 rounded" />
            )
        }
    ]

    return (
        <div id="trending-coins-fallback">
            <h4>Trending Coins</h4>
            <DataTable
                data={[...Array(6)]}
                columns={columns}
                rowKey={(_, i) => i}
                tableClassName="trending-coins-table"
                headerCellClassName="py-3"
                bodyCellClassName="py-2"
            />
        </div>
    )
}
