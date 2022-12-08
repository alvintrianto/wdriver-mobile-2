describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await  $("//android.widget.TextView[@content-desc='Accessibility']").click();
        await driver.pause(1000)
    });
});
