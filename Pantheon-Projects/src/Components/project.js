import React, { useState } from 'react'
import RankingHistory from './Ranking-History'
import TopChart from './Top-Chart'
import TrackedApp from './Tracked_Apps'
import AppSuggestions from './AppSuggestions'
import "./project.css"
import Navbar from './Navbar/navbar.js'
import '../../node_modules/react-grid-layout/css/styles.css'
import "../../node_modules/react-resizable/css/styles.css"
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);


function Project() {
    const [newdate, setNewdate] = useState("2020-10-16");

    const onChangedate = (value) => {
        setNewdate(value);
    }
    return (
        <div>
            <Navbar onChangedate={onChangedate} />
            <header>
                <p>Dashboard</p>
            </header>
            <div className="container">
                <ResponsiveGridLayout className="layout"
                    breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                    cols={{ lg: 11, md: 10, sm: 6, xs: 4, xxs: 2 }}>
                    <div key="a" className="maindiv"  data-grid={{ x: 0.3, y: 0, w: 4.1, h: 2 }}>
                        <TopChart newdate={newdate} />
                    </div>
                    <div key="b" className="maindiv" data-grid={{ x: 4.5, y: 0, w: 4.1, h: 2 }}>
                        <TrackedApp />
                    </div>
                    <div key="c" className="maindiv" data-grid={{ x: 0.3, y: 1, w: 4.1, h: 2 }}>
                        <AppSuggestions />
                    </div>
                    <div key="d" className="maindiv" data-grid={{ x: 4.5, y: 1, w: 4.1, h: 2 }}>
                        <RankingHistory onChangedate={onChangedate} />
                    </div>
                </ResponsiveGridLayout>

            </div>
        </div>
    )

}
export default Project;
