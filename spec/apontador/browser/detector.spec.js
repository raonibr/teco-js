/*global describe, it, expect*/
require(["apontador/browser/detector"], function (Detector) {
    "use strict";
    var ua = {
        // apple source: http://developer.apple.com/library/ios/#documentation/AppleApplications/Reference/SafariWebContent/OptimizingforSafarioniPhone/OptimizingforSafarioniPhone.html
        "ios_phone": "Mozilla/5.0 (iPhone; U; CPU iOS 2_0 like Mac OS X; en-us) AppleWebKit/525.18.1 (KHTML, like Gecko) Version/3.1.1 Mobile/XXXXX Safari/525.20",
        "ios_player": "Mozilla/5.0 (iPod; U; CPU like Mac OS X; en) AppleWebKit/420.1 (KHTML, like Gecko) Version/3.0 Mobile/4A93 Safari/419.3",
        "ios_tablet": "Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10",

        //android source: https://developers.google.com/chrome/mobile/docs/user-agent
        "android_phone": "Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19",
        "android_tablet": "Mozilla/5.0 (Linux; Android 4.1.1; Nexus 7 Build/JRO03D) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19",

        //blackberry source: http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/How-to-detect-the-BlackBerry-Browser/ta-p/559862
        "blackberry_webkit": "Mozilla/5.0 (BlackBerry; U; BlackBerry AAAA; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/X.X.X.X Mobile Safari/534.11+",
        "blackberry_9000": "BlackBerry9000/5.0.0.93 Profile/MIDP-2.0 Configuration/CLDC-1.1 VendorID/179",
        "blackberry_tablet": "Mozilla/5.0 (PlayBook; U; RIM Tablet OS 2.0.0; en-US) AppleWebKit/535.8+ (KHTML, like Gecko) Version/7.2.0.0 Safari/535.8+",

        //windows phone source: http://blogs.msdn.com/b/devfish/archive/2011/08/01/explore-the-browser-user-agent-in-windows-phone-mango.aspx
        "windows_phone": "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; DELL; Venue Pro)",

        //windows tablet source: http://msdn.microsoft.com/en-us/library/ie/hh920767%28v=vs.85%29.aspx
        "windows_tablet": "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0; Touch)",

        "destop_chrome": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.64 Safari/537.11",
        "desktop_firefox": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0",
        "desktop_ie": "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/6.0)",
        "desktop_safari": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/536.26.17 (KHTML, like Gecko) Version/6.0.2 Safari/536.26.17"
    };

    describe("Browser Detector", function () {
        it("should detect an iPhone as mobile", function () {
            var detector = new Detector(ua.ios_phone);
            expect(detector.isMobile()).toBeTruthy();
        });

        it("should detect an iPod as mobile", function () {
            var detector = new Detector(ua.ios_player);
            expect(detector.isMobile()).toBeTruthy();
        });

        it("should detect an Android Smartphone as mobile", function () {
            var detector = new Detector(ua.android_phone);
            expect(detector.isMobile()).toBeTruthy();
        });

        it("should detect a BlackBerry as mobile", function () {
            var detector = new Detector(ua.blackberry_webkit);
            expect(detector.isMobile()).toBeTruthy();

            detector = new Detector(ua.blackberry_9000);
            expect(detector.isMobile()).toBeTruthy();
        });

        it("should detect a Windows Phone as mobile", function () {
            var detector = new Detector(ua.windows_phone);
            expect(detector.isMobile()).toBeTruthy();
        });

        it("should not detect an iPad as a mobile", function () {
            var detector = new Detector(ua.ios_tablet);
            expect(detector.isMobile()).toBeFalsy();
        });

        it("should not detect an Android Tablet as a mobile", function () {
            var detector = new Detector(ua.android_tablet);
            expect(detector.isMobile()).toBeFalsy();
        });

        it("should not detect a BlackBerry Playbook as a mobile", function () {
            var detector = new Detector(ua.blackberry_tablet);
            expect(detector.isMobile()).toBeFalsy();
        });

        it("should not detect a Windows Tablet as a mobile", function () {
            var detector = new Detector(ua.windows_tablet);
            expect(detector.isMobile()).toBeFalsy();
        });

        it("should not detect a Desktop as a mobile", function () {
            var detector = new Detector(ua.desktop_firefox);
            expect(detector.isMobile()).toBeFalsy();

            detector = new Detector(ua.desktop_ie);
            expect(detector.isMobile()).toBeFalsy();

            detector = new Detector(ua.desktop_chrome);
            expect(detector.isMobile()).toBeFalsy();

            detector = new Detector(ua.desktop_safari);
            expect(detector.isMobile()).toBeFalsy();
        });
    });
});
