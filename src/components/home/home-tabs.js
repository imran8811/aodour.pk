import React, {Fragment, useState, useEffect} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import NewArrivalsHomeTab from './new-arrivals-tab-home';
import TrendingProductsHomeTab from './trending-products-home-tab';

function HomeTabs(){
    return(
        <Fragment>
            <Tabs>
                <TabList>
                    <Tab>New Arrivals</Tab>
                    <Tab>Trending Goodies</Tab>
                </TabList>
                <TabPanel>
                    <NewArrivalsHomeTab />
                </TabPanel>
                <TabPanel>
                    <TrendingProductsHomeTab />
                </TabPanel>
            </Tabs>
        </Fragment>
    )
}
export default HomeTabs;