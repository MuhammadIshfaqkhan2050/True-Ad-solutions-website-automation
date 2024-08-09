import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class trueadsolutions extends Page {
    /**
     * define selectors using getter methods
     */
    get aboutUsHeader () {
        return $('(//*[contains(text(),"About Us")])[1]');
    }

    get aboutUsFooter () {
        return $('(//*[contains(text(),"About Us")])[4]');
    }

    get home () {
        return $('(//*[contains(text(),"Home")])[1]');
    }

    get services () {
        return $('(//*[contains(text(),"Services")])[1]');
    }

    get servicesFooter () {
        return $('(//*[contains(text(),"Services")])[10]');
    }

    get servicesDropdown () {
        return $('(//i[@class="wpr-sub-icon fas"])[1]')
    }

    get payPerClick () {
        return $('(//*[contains(text(),"Pay Per Click")])[1]')
    }

    get payPerClickFooter () {
        return $('(//*[contains(text(),"PPC Ads")])[1]')
    }

    get copyWriting () {
        return $('(//*[contains(text(),"Copy Writing")])[1]')
    }

    get copyWritingFooter () {
        return $('(//*[contains(text(),"Copy Writing")])[4]')
    }

    get webDevlopment () {
        return $('(//*[contains(text(),"Web Development")])[1]')
    }

    get webDevlopmentFooter () {
        return $('(//*[contains(text(),"Web Development")])[4]')
    }

    get sofwareDevlopment () {
        return $('(//*[contains(text(),"Software Development")])[1]')
    }

    get sofwareDevlopmentFooter () {
        return $('(//*[contains(text(),"Software Development")])[4]')
    }

    get mobileAppDevlopment () {
        return $('(//*[contains(text(),"Mobile App Development")])[1]')
    }

    get mobileAppDevlopmentFooter () {
        return $('(//*[contains(text(),"Mobile App Development")])[4]')
    }

    get SEOServices () {
        return $('(//*[contains(text(),"SEO Services")])[1]')
    }

    get SEOServicesFooter () {
        return $('(//*[contains(text(),"Search Engine Optimization")])[2]')
    }

    get socialMediaMangment () {
        return $('(//*[contains(text(),"Social Media Management")])[1]')
    }

    get socialMediaMangmentFooter () {
        return $('(//*[contains(text(),"Social Media Management")])[6]')
    }

    get digitalMarketingStrategy () {
        return $('(//*[contains(text(),"Digital Marketing Strategy")])[1]')
    }

    get CRMSolutions () {
        return $('(//*[contains(text(),"CRM Solutions")])[1]')
    }

    get socialMediaMarketing () {
        return $('(//*[contains(text(),"Social Media Marketing")])[1]')
    }

    get conversionRateOptimizationServices () {
        return $('(//*[contains(text(),"Conversion Rate Optimization Services")])[1]')
    }

    get areaWeServe () {
        return $('(//*[contains(text(),"Areas we serve")])[1]')
    }

    get newYork () {
        return $('//*[@id="menu-1-629cef0"]/li[4]/ul/li[1]')
    }

    get dallas () {
        return $('//*[@id="menu-1-629cef0"]/li[4]/ul/li[2]')
    }

    get losAngeles () {
        return $('//*[@id="menu-1-629cef0"]/li[4]/ul/li[3]')
    }

    get chesapeake () {
        return $('//*[@id="menu-1-629cef0"]/li[4]/ul/li[4]')
    }

    get plandome () {
        return $('//*[@id="menu-1-629cef0"]/li[4]/ul/li[5]')
    }

    get longIsland () {
        return $('//*[@id="menu-1-629cef0"]/li[4]/ul/li[6]')
    }

    get Connecticut () {
        return $('//*[@id="menu-1-629cef0"]/li[4]/ul/li[7]')
    }

    get contactUs () {
        return $('(//*[contains(text(),"Contact Us")])[1]')
    }

    get contactUsFooter () {
        return $('(//*[contains(text(),"Contact Us")])[8]')
    }

    get blog () {
        return $('(//*[contains(text(),"Blog")])[1]')
    }

    get blogFooter () {
        return $('(//*[contains(text(),"Blog")])[4]')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async open () {
        browser.url(`https://trueadsolutions.com/`)
        browser.pause(2000);
        browser.maximizeWindow();
    }
}

export default new trueadsolutions();
