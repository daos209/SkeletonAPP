import { browser, by, element } from 'protractor';

describe('workspace-project App', () => {
    beforeAll(() => {
        // Configuración inicial si es necesario
    });

    it('should display welcome message', () => {
        browser.get('/');
        element(by.css('ion-title')).getText().then((text) => {
            expect(text).toEqual('Welcome to skeleton-app!');
        });
    });

    it('should access the camera', () => {
        const cameraButton = element(by.css('.camera-button'));
        cameraButton.click();
        element(by.css('.camera-view')).isPresent().then((isPresent) => {
            expect(isPresent).toBe(true);
        });
    });

    it('should access the GPS', () => {
        const gpsButton = element(by.css('.gps-button'));
        gpsButton.click();
        element(by.css('.gps-coordinates')).getText().then((coordinates) => {
            expect(coordinates).toMatch(/Latitude: \d+\.\d+, Longitude: \d+\.\d+/);
        });
    });

    it('should navigate to settings page', () => {
        const settingsButton = element(by.css('.settings-button'));
        settingsButton.click();
        element(by.css('ion-title')).getText().then((text) => {
            expect(text).toEqual('Settings');
        });
    });

    it('should update user profile', () => {
        const profileButton = element(by.css('.profile-button'));
        profileButton.click();
        const nameInput = element(by.css('input[name="name"]'));
        nameInput.clear();
        nameInput.sendKeys('New Name');
        const saveButton = element(by.css('.save-button'));
        saveButton.click();
        element(by.css('.profile-name')).getText().then((text) => {
            expect(text).toEqual('New Name');
        });
    });

    afterAll(() => {
        // Limpieza si es necesario
    });
});