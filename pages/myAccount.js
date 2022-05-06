const { I } = inject();

module.exports = {

  // tshirt: locate('a').withText('T-shirts'),
  // css=E[A*='t']
  tshirt: {css: 'ul.sf-menu.clearfix.menu-content.sf-js-enabled.sf-arrows>:last-child'},
  imgTshirt: {css: 'a.product_img_link>img.replace-2x.img-responsive'},
  // tshirt: locate('ul.sf-menu clearfix menu-content sf-js-enabled sf-arrows').last(),

  verifyMyAccount() {
    I.seeTitleEquals('My account - My Store');
  },

  clickTshirt(){
    I.waitForVisible(this.tshirt);
    I.click(this.tshirt);
    console.log(this.imgtshirt);
  },
 
  clickImage(){
    // I.waitForVisible(this.imgtshirt);
    I.scrollTo(this.imgTshirt);
    I.moveCursorTo(this.imgtshirt);
    // I.click('a.product_img_link>img.replace-2x.img-responsive');
  }

}
