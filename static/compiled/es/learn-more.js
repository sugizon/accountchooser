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

var a=window,f=jQuery,g="length",i="",j='"]',k="#",l=".",o=".widget-footer",p='<a href="http://accountchooser.net/owners">',q="Si eres administrador de un sitio web, puedes obtener informaci\u00f3n sobre c\u00f3mo implementar un selector de cuentas en ",r='[id^="',s="esta p\u00e1gina",t="id";a.accountchooser=a.accountchooser||{};a.cds=a.accountchooser;function u(b,d){return q+(b+(s+(d+l)))}
a.accountchooser.cdsLearnMorePageMessages={title:"M\u00e1s informaci\u00f3n sobre el servicio central de selector de cuentas - Grupo de trabajo del selector de cuentas",header:"M\u00e1s informaci\u00f3n sobre el servicio central de selector de cuentas",deployReminder1:u(p,"</a>"),sec1Par1:'Se est\u00e1n sustituyendo los tradicionales cuadros de acceso de los sitios web por un selector de cuentas para que los sitios sean m\u00e1s seguros y m\u00e1s f\u00e1ciles de usar (<a href="https://ac-cribwars.appspot.com">explora un sitio de ejemplo</a>). Al intentar iniciar sesi\u00f3n en dicho sitio, ver\u00e1s una p\u00e1gina como esta con la lista de cuentas m\u00e1s utilizadas en este ordenador:',
sec1Par2:"Solo tienes que hacer clic en la cuenta que quieras utilizar. Si no ves una entrada para dicha cuenta, haz clic en el bot\u00f3n de abajo para a\u00f1adir otra cuenta.",sec1Par3:"Cuando inicies sesi\u00f3n en la cuenta, aparecer\u00e1 una p\u00e1gina como esta solicitando tu confirmaci\u00f3n para a\u00f1adirla a la lista de cuentas de este ordenador.",subHeader1:"Temas avanzados",sec2Par1:'Si quieres eliminar una cuenta, coloca el cursor del rat\u00f3n sobre la entrada correspondiente y selecciona la X que aparece en la esquina superior de la misma para eliminarla o haz clic en el bot\u00f3n "Editar" si utilizas un navegador m\u00f3vil. No obstante, si utilizas un ordenador compartido y no quieres que se mezclen las entradas de las cuentas de distintos usuarios, te recomendamos que busques una forma de mantener separada tu informaci\u00f3n de navegaci\u00f3n. Por ejemplo:',
sec2Par1List1:"Utiliza cuentas de distintos sistemas operativos.",sec2Par1List2:"Utiliza distintos navegadores.",sec2Par1List3:'Utiliza distintos perfiles en el navegador (m\u00e1s informaci\u00f3n sobre c\u00f3mo utilizarlos en <a href="http://support.mozilla.org/en-US/kb/Managing-profiles">Firefox</a> o en <a href="http://support.google.com/chrome/bin/answer.py?hl=en&answer=2364824">Google Chrome</a>).',sec2Par1List4:'Utiliza la funci\u00f3n de navegaci\u00f3n segura del navegador (m\u00e1s informaci\u00f3n sobre c\u00f3mo utilizar este modo en <a href="http://windows.microsoft.com/en-US/windows7/What-is-InPrivate-Browsing">Internet Explorer</a>, en <a href="http://support.mozilla.org/en-US/kb/Private-Browsing">Firefox</a>, en <a href="http://support.google.com/chrome/bin/answer.py?hl=en&answer=95464">Google Chrome</a> o en <a href="http://docs.info.apple.com/article.html?path=Safari/3.0/en/9311.html">Safari</a>).',
sec2Par2:'La lista de cuentas mostradas por accountchooser.com se almacena en tu navegador. La informaci\u00f3n de cuenta nunca se comparte con un sitio a menos que selecciones expl\u00edcitamente una cuenta para utilizarla con el sitio. Puedes visitar el <a href="/">sitio central del selector de cuentas</a> directamente en cualquier momento para consultar o eliminar entradas de cuentas. Tambi\u00e9n puedes inhabilitar o volver a habilitar el servicio de selector de cuentas en tu ordenador. Para ello, visita <a href="/config.html">esta p\u00e1gina</a>.',
subHeader2:"Propietario de sitio web: obt\u00e9n m\u00e1s informaci\u00f3n sobre c\u00f3mo actualizar tu sitio.",sec3Par1:"Existen varias ventajas al actualizar el sitio y utilizar un Selector de cuentas:",sec3Par1List1:"Aumenta los porcentajes de inicios de sesi\u00f3n y de registros en el sitio.",sec3Par1List2:"Hace m\u00e1s f\u00e1cil que el sitio web sea compatible con proveedores de identidad en el futuro.",sec3Par1List3:"Solo requiere algunos cambios muy peque\u00f1os en el sitio.",deployReminder2:u(p,
"</a>"),deployButton:'<a href="http://accountchooser.net/owners" class="button" style="width:100%">Learn how you can deploy an account chooser</a>'};a.accountchooser.DEFAULT_ACCOUNT_MAN_HOME_={email:"john.garcia@gmail.com",displayName:"John Garcia",photoUrl:"https://ssl.gstatic.com/cds/image/man-personal.jpg"};a.accountchooser.DEFAULT_ACCOUNT_MAN_WORK_={email:"jgarcia@summitmedgroup.com",displayName:"John Garcia",photoUrl:"https://ssl.gstatic.com/cds/image/man-professional.jpg"};
a.accountchooser.DEFAULT_ACCOUNT_WOMAN_HOME_={email:"sara_corlett@yahoo.com",displayName:"Sara Corlett",photoUrl:"https://ssl.gstatic.com/cds/image/woman-personal.jpg"};a.accountchooser.DEFAULT_ACCOUNT_WOMAN_WORK_={email:"corlett@alertblue.com",displayName:"Mrs. Corlett",photoUrl:"https://ssl.gstatic.com/cds/image/woman-professional.jpg"};a.accountchooser.setWindowTitle=function(b){a.document.title=(b||a.accountchooser.cdsLearnMorePageMessages).title};
a.accountchooser.showMessages=function(b,d){var c=f(r+b+j),e=d||a.accountchooser.cdsLearnMorePageMessages;if(c&&e)for(var h=0;h<c[g];h++){var m=f(c[h]),n=m.attr(t).replace(b,i);e[n]&&m.html(e[n])}};a.accountchooser.showSelectAccountPage=function(b){var b=f(k+b),d=new a.accountchooser.page.SelectAccountPage,c=a.accountchooser.getAccountList_();d.render(b,null,c,!0,void 0,void 0,null,!1);b.children(o).hide()};
a.accountchooser.showShareAccountPage=function(b){var b=f(k+b),d=new a.accountchooser.page.ShareAccountPage,c=a.accountchooser.getAccountList_(),e=Math.floor(Math.random()*c[g]),e=c.splice(e,1)[0];d.render(b,e,c,void 0,null,!1);b.children(o).hide()};a.accountchooser.MAX_NUMBER_OF_SAMPLE_ACCOUNTS_=2;a.accountchooser.MIN_NUMBER_OF_SAMPLE_ACCOUNTS_=2;
a.accountchooser.getAccountList_=function(){var b=a.accountchooser.util.accountstorage.readAccounts(),d=a.accountchooser.MAX_NUMBER_OF_SAMPLE_ACCOUNTS_,c=a.accountchooser.MIN_NUMBER_OF_SAMPLE_ACCOUNTS_;return b[g]>d?b.slice(0,d):b[g]<c?[a.accountchooser.DEFAULT_ACCOUNT_WOMAN_WORK_,a.accountchooser.DEFAULT_ACCOUNT_WOMAN_HOME_]:b};
