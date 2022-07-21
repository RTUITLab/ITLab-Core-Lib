describe('react-ui-core: ReactUiCore component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=reactuicore--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ReactUiCore!');
    });
});
