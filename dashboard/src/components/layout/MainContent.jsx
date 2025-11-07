import React from "react";
import MetricCards from "../ui/MetricCards";
import ChartVisual from "../ui/ChartVisual";
import TransactionTable from "../ui/TransactionTable";

export default function Maincontent() {
	return (
		<section className="space-y-6">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <MetricCards />
            <ChartVisual />                
                </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <TransactionTable />
        </div>
		</section>
	)
}