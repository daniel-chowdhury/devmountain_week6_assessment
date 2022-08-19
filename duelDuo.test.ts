
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Check to see if draw button shows card options', async () => {
    let draw_btn = await driver.findElement(By.id('draw'))
    await driver.sleep(3000)
    await draw_btn.click()
    await driver.sleep(3000)
    let bot_btn = await driver.findElement(By.className('bot-btn'))
    //console.log("dfkjghdfghj" + bot_btn)
    await bot_btn[1].click()
    let card = await driver.findElement(By.xpath('//section/div'))
    let displayed = await card.isDisplayed()
    expect(displayed).toBe(true)
})

test('Check to see if Add to Duo button works', async () => {
    
    await driver.sleep(5000)
    let your_duo = await driver.findElement(By.id('player-duo'))
    let displayed = await your_duo.isDisplayed()
    expect(displayed).toBe(true)
})

