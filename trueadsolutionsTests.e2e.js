import { expect } from '@wdio/globals'
import trueadsolutions from '../pageobjects/trueadsolutions.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('TrueAdSolutions Broken Links Automation', () => {
    it('Verify Home header link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.aboutUsHeader.click();
        await expect(browser).toHaveUrlContaining('trueadsolutions')
        await browser.pause(2000);
    })

    it('Verify About Us header link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.aboutUsHeader.click();
        await expect(browser).toHaveUrlContaining('about-us')
        await browser.pause(2000);
    })

    it('Verify Service link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.services.click();
        await expect(browser).toHaveUrlContaining('services')
        await browser.pause(2000);
    })

    it('Verify Pay Per Click link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.services.moveTo();
        await trueadsolutions.payPerClick.click({ force: true });
        await expect(browser).toHaveUrlContaining('pay-per-click-ppc')
        await browser.pause(2000);
    })

    it('Verify Copy Writing link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.services.moveTo();
        await trueadsolutions.copyWriting.click({ force: true });
        await expect(browser).toHaveUrlContaining('copy-writing')
        await browser.pause(2000);
    })

    it('Verify Web Devlopment link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.services.moveTo();
        await trueadsolutions.webDevlopment.click({ force: true });
        await expect(browser).toHaveUrlContaining('web-development')
        await browser.pause(2000);
    })

    it('Verify Software Devlopment link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.services.moveTo();
        await trueadsolutions.sofwareDevlopment.click({ force: true });
        await expect(browser).toHaveUrlContaining('software-development')
        await browser.pause(2000);
    })

    it('Verify Mobile App Devlopment link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.services.moveTo();
        await trueadsolutions.mobileAppDevlopment.click({ force: true });
        await expect(browser).toHaveUrlContaining('mobile-app-development')
        await browser.pause(2000);
    })

    it('Verify SEO Services link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.services.moveTo();
        await trueadsolutions.SEOServices.click({ force: true });
        await expect(browser).toHaveUrlContaining('seo-services')
        await browser.pause(2000);
    })

    it('Verify Social Media Management link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.services.moveTo();
        await trueadsolutions.socialMediaMangment.click({ force: true });
        await expect(browser).toHaveUrlContaining('social-media-management')
        await browser.pause(2000);
    })

    it('Verify Digital Marketing Strategy link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.services.moveTo();
        await trueadsolutions.digitalMarketingStrategy.click({ force: true });
        await expect(browser).toHaveUrlContaining('digital-marketing-strategy')
        await browser.pause(2000);
    })

    it('Verify CRM Solutions link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.services.moveTo();
        await trueadsolutions.CRMSolutions.click({ force: true });
        await expect(browser).toHaveUrlContaining('crm-solutions')
        await browser.pause(2000);
    })

    it('Verify Social Media Marketing link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.services.moveTo();
        await trueadsolutions.socialMediaMarketing.click({ force: true });
        await expect(browser).toHaveUrlContaining('social-media-marketing')
        await browser.pause(2000);
    })

    it('Verify Conversion Rate Optimization Services link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.services.moveTo();
        await trueadsolutions.conversionRateOptimizationServices.click({ force: true });
        await expect(browser).toHaveUrlContaining('conversion-rate-optimization-services')
        await browser.pause(2000);
    })

    it('Verify Area we serve > New York link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.areaWeServe.moveTo();
        await trueadsolutions.newYork.click();
        await expect(browser).toHaveUrlContaining('digital-marketing-services-new-york')
        await browser.pause(2000);
    })

    it('Verify Area we serve > Dallas link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.areaWeServe.moveTo();
        await trueadsolutions.dallas.click({ force: true });
        await expect(browser).toHaveUrlContaining('digital-marketing-services-dallas')
        await browser.pause(2000);
    })

    it('Verify Area we serve > Los Angeles link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.areaWeServe.moveTo();
        await trueadsolutions.losAngeles.click({ force: true });
        await expect(browser).toHaveUrlContaining('digital-marketing-services-la')
        await browser.pause(2000);
    })

    it('Verify Area we serve > Chesapeake link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.areaWeServe.moveTo();
        await trueadsolutions.chesapeake.click({ force: true });
        await expect(browser).toHaveUrlContaining('digital-marketing-services-chesapeake')
        await browser.pause(2000);
    })

    it('Verify Area we serve > Plandome link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.areaWeServe.moveTo();
        await trueadsolutions.plandome.click({ force: true });
        await expect(browser).toHaveUrlContaining('digital-marketing-services-plandome')
        await browser.pause(2000);
    })

    it('Verify Area we serve > Long Island link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.areaWeServe.moveTo();
        await trueadsolutions.longIsland.click({ force: true });
        await expect(browser).toHaveUrlContaining('digital-marketing-services-long-island')
        await browser.pause(2000);
    })

    it('Verify Area we serve > Connecticut link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.areaWeServe.moveTo();
        await trueadsolutions.Connecticut.click({ force: true });
        await expect(browser).toHaveUrlContaining('digital-marketing-services-connecticut')
        await browser.pause(2000);
    })

    it('Verify Contact Us link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.contactUs.click();
        await expect(browser).toHaveUrlContaining('contact-us')
        await browser.pause(2000);
    })

    it('Verify Blog link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.blog.click();
        await expect(browser).toHaveUrlContaining('blog')
        await browser.pause(2000);
    })

    it('Verify About Us footer link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.aboutUsFooter.scrollIntoView();
        await trueadsolutions.aboutUsFooter.click();
        await expect(browser).toHaveUrlContaining('about-us')
        await browser.pause(2000);
    })

    it('Verify Service Footer link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.servicesFooter.scrollIntoView();
        await trueadsolutions.servicesFooter.click();
        await expect(browser).toHaveUrlContaining('services')
        await browser.pause(2000);
    })

    it('Verify Blog Footer link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.blogFooter.scrollIntoView();
        await trueadsolutions.blogFooter.click();
        await expect(browser).toHaveUrlContaining('blog')
        await browser.pause(2000);
    })

    it('Verify Contact Us Footer link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.contactUsFooter.scrollIntoView();
        await trueadsolutions.contactUsFooter.click();
        await expect(browser).toHaveUrlContaining('contact-us')
        await browser.pause(2000);
    })

    it('Verify Pay Per Click Footer link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.payPerClickFooter.scrollIntoView();
        await trueadsolutions.payPerClickFooter.click({ force: true });
        await expect(browser).toHaveUrlContaining('pay-per-click-ppc')
        await browser.pause(2000);
    })

    it('Verify Copy Writing Footer link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.copyWritingFooter.scrollIntoView();
        await trueadsolutions.copyWritingFooter.click({ force: true });
        await expect(browser).toHaveUrlContaining('copy-writing')
        await browser.pause(2000);
    })

    it('Verify Web Devlopment Footer link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.webDevlopmentFooter.scrollIntoView();
        await trueadsolutions.webDevlopmentFooter.click({ force: true });
        await expect(browser).toHaveUrlContaining('web-development')
        await browser.pause(2000);
    })

    it('Verify Software Devlopment Footer link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.sofwareDevlopmentFooter.scrollIntoView();
        await trueadsolutions.sofwareDevlopmentFooter.click({ force: true });
        await expect(browser).toHaveUrlContaining('software-development')
        await browser.pause(2000);
    })

    it('Verify Mobile App Devlopment Footer link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.mobileAppDevlopmentFooter.scrollIntoView();
        await trueadsolutions.mobileAppDevlopmentFooter.click({ force: true });
        await expect(browser).toHaveUrlContaining('mobile-app-development')
        await browser.pause(2000);
    })

    it('Verify Social Media Management Footer link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.socialMediaMangmentFooter.scrollIntoView();
        await trueadsolutions.socialMediaMangmentFooter.click({ force: true });
        await expect(browser).toHaveUrlContaining('social-media-management')
        await browser.pause(2000);
    })

    it('Verify SEO Services Footer link', async () => {
        await trueadsolutions.open();
        await trueadsolutions.SEOServicesFooter.scrollIntoView();
        await trueadsolutions.SEOServicesFooter.click({ force: true });
        await expect(browser).toHaveUrlContaining('seo-services')
        await browser.pause(2000);
    })
})

