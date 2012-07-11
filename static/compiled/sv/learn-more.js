/* Copyright 2012 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var a=window,f=jQuery,g="length",i="",j='"]',k="#",l=".",o=".widget-footer",p='<a href="http://accountchooser.net/owners">',q="Om du \u00e4r ansvarig f\u00f6r en webbplats ",r='[id^="',s="id",t="kan du l\u00e4sa mer om hur du kan anv\u00e4nda kontovalsfunktionen";a.accountchooser=a.accountchooser||{};a.cds=a.accountchooser;function u(b,d){return q+(b+(t+(d+l)))}
a.accountchooser.cdsLearnMorePageMessages={title:"L\u00e4s mer om den centrala kontovalstj\u00e4nsten \u2013 arbetsgruppen f\u00f6r kontovalsfunktionen",header:"L\u00e4s mer om den centrala kontovalstj\u00e4nsten",deployReminder1:u(p,"</a>"),sec1Par1:'En del webbplatser ers\u00e4tter traditionella inloggningsrutor med kontov\u00e4ljare f\u00f6r att det ska bli enklare att logga in och f\u00f6r att g\u00f6ra webbplatserna s\u00e4krare. (<a href="https://ac-cribwars.appspot.com">ta en titt p\u00e5 en s\u00e5dan webbplats</a>). N\u00e4r du loggar in p\u00e5 en s\u00e5dan webbplats visas en sida med en lista \u00f6ver de konton som du anv\u00e4nder oftast p\u00e5 datorn:',
sec1Par2:"Klicka bara p\u00e5 kontot som du vill anv\u00e4nda. Om kontot inte visas klickar du p\u00e5 knappen l\u00e4ngst ned och l\u00e4gger till det.",sec1Par3:"N\u00e4r du har loggat in p\u00e5 kontot visas en sida som ser ut ungef\u00e4r som den h\u00e4r. D\u00e4r bekr\u00e4ftar du att du vill l\u00e4gga till kontot i listan f\u00f6r den h\u00e4r datorn.",subHeader1:"Avancerade \u00e4mnen",sec2Par1:"Om du vill ta bort ett konto h\u00e5ller du muspekaren \u00f6ver det aktuella kontot i listan och klickar p\u00e5 knappen X i det \u00f6vre h\u00f6rnet (i mobila webbl\u00e4sare klickar du p\u00e5 knappen Redigera). Om du anv\u00e4nder en delad dator och inte vill att andra personer ska komma \u00e5t de konton du anv\u00e4nder kan du h\u00e5lla uppgifterna i webbl\u00e4saren \u00e5tskilda p\u00e5 olika s\u00e4tt. Du kan till exempel:",
sec2Par1List1:"anv\u00e4nda olika konton i operativsystemet",sec2Par1List2:"anv\u00e4nda olika webbl\u00e4sare",sec2Par1List3:'anv\u00e4nda olika profiler i webbl\u00e4saren (l\u00e4s mer om hur du anv\u00e4nder profiler i <a href="http://support.mozilla.org/en-US/kb/Managing-profiles">Firefox</a> eller <a href="http://support.google.com/chrome/bin/answer.py?hl=en&answer=2364824">Google Chrome</a>)',sec2Par1List4:'anv\u00e4nda funktionen f\u00f6r privat surfning (l\u00e4s mer om hur du anv\u00e4nder funktionen i <a href="http://windows.microsoft.com/en-US/windows7/What-is-InPrivate-Browsing">Internet Explorer</a>, <a href="http://support.mozilla.org/en-US/kb/Private-Browsing">Firefox</a>, <a href="http://support.google.com/chrome/bin/answer.py?hl=en&answer=95464">Google Chrome</a> eller <a href="http://docs.info.apple.com/article.html?path=Safari/3.0/en/9311.html">Safari</a>)',
sec2Par2:'Listan \u00f6ver konton som visas p\u00e5 accountchooser.com sparas i din webbl\u00e4sare. Kontouppgifterna delas aldrig med en webbplats om du inte aktivt v\u00e4ljer ett konto som du vill anv\u00e4nda p\u00e5 webbplatsen. Du kan n\u00e4r som helst bes\u00f6ka <a href="/">webbplatsen f\u00f6r den centrala kontovalsfunktionen</a> och visa eller ta bort konton. Du kan \u00e4ven inaktivera eller \u00e5teraktivera kontovalstj\u00e4nsten p\u00e5 datorn genom att bes\u00f6ka <a href="/config.html">den h\u00e4r sidan</a>.',
subHeader2:"Webbplats\u00e4gare: L\u00e4r dig hur du uppgraderar din webbplats",sec3Par1:"Det finns flera f\u00f6rdelar med att uppgradera webbplatsen f\u00f6r att anv\u00e4nda Account Chooser:",sec3Par1List1:"\u00d6ka antalet inloggningar och registreringar p\u00e5 din webbplats",sec3Par1List2:"G\u00f6r det l\u00e4ttare f\u00f6r din webbplats att st\u00f6dja framtida identitetsleverant\u00f6rer",sec3Par1List3:"Funktionen kr\u00e4ver bara n\u00e5gra sm\u00e5 f\u00f6r\u00e4ndringar p\u00e5 din webbplats",
deployReminder2:u(p,"</a>"),deployButton:'<a href="http://accountchooser.net/owners" class="button" style="width:100%">Learn how you can deploy an account chooser</a>'};a.accountchooser.DEFAULT_ACCOUNT_MAN_HOME_={email:"john.garcia@gmail.com",displayName:"John Garcia",photoUrl:"https://ssl.gstatic.com/cds/image/man-personal.jpg"};a.accountchooser.DEFAULT_ACCOUNT_MAN_WORK_={email:"jgarcia@summitmedgroup.com",displayName:"John Garcia",photoUrl:"https://ssl.gstatic.com/cds/image/man-professional.jpg"};
a.accountchooser.DEFAULT_ACCOUNT_WOMAN_HOME_={email:"sara_corlett@yahoo.com",displayName:"Sara Corlett",photoUrl:"https://ssl.gstatic.com/cds/image/woman-personal.jpg"};a.accountchooser.DEFAULT_ACCOUNT_WOMAN_WORK_={email:"corlett@alertblue.com",displayName:"Mrs. Corlett",photoUrl:"https://ssl.gstatic.com/cds/image/woman-professional.jpg"};a.accountchooser.setWindowTitle=function(b){a.document.title=(b||a.accountchooser.cdsLearnMorePageMessages).title};
a.accountchooser.showMessages=function(b,d){var c=f(r+b+j),e=d||a.accountchooser.cdsLearnMorePageMessages;if(c&&e)for(var h=0;h<c[g];h++){var m=f(c[h]),n=m.attr(s).replace(b,i);e[n]&&m.html(e[n])}};a.accountchooser.showSelectAccountPage=function(b){var b=f(k+b),d=new a.accountchooser.page.SelectAccountPage,c=a.accountchooser.getAccountList_();d.render(b,null,c,!0,void 0,void 0,null,!1);b.children(o).hide()};
a.accountchooser.showShareAccountPage=function(b){var b=f(k+b),d=new a.accountchooser.page.ShareAccountPage,c=a.accountchooser.getAccountList_(),e=Math.floor(Math.random()*c[g]),e=c.splice(e,1)[0];d.render(b,e,c,void 0,null,!1);b.children(o).hide()};a.accountchooser.MAX_NUMBER_OF_SAMPLE_ACCOUNTS_=2;a.accountchooser.MIN_NUMBER_OF_SAMPLE_ACCOUNTS_=2;
a.accountchooser.getAccountList_=function(){var b=a.accountchooser.util.accountstorage.readAccounts(),d=a.accountchooser.MAX_NUMBER_OF_SAMPLE_ACCOUNTS_,c=a.accountchooser.MIN_NUMBER_OF_SAMPLE_ACCOUNTS_;return b[g]>d?b.slice(0,d):b[g]<c?[a.accountchooser.DEFAULT_ACCOUNT_WOMAN_WORK_,a.accountchooser.DEFAULT_ACCOUNT_WOMAN_HOME_]:b};
