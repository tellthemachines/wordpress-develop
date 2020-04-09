import { visitAdminPage } from '@wordpress/e2e-test-utils';

const screenshotOptions = {
	fullPage: true,
}

async function hideDynamicElements(elements) {
	for (let i = 0; i < elements.length; i++) {
		const elementOnPage = await page.$(elements[i]);
		if (elementOnPage) {
			await page.$eval(elements[i], el => {
				el.style.visibility = 'hidden'
			});
		}
	}
}

const commonDynamicElements = [
	'#footer-upgrade',
	'#wp-admin-bar-updates',
	'#wp-admin-bar-comments',
	'#wp-admin-bar-new-content'
];

describe('Admin Visual Snapshots', () => {

	it('All Posts', async () => {
		await visitAdminPage('/edit.php');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});

	it('Categories', async () => {
		await visitAdminPage('/edit-tags.php', 'taxonomy=category');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});

	it('Tags', async () => {
		await visitAdminPage('/edit-tags.php', 'taxonomy=post_tag');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});

	it('Media Library', async () => {
		await visitAdminPage('/upload.php');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});

	it('Add New Media', async () => {
		await visitAdminPage('/media-new.php');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});

	it('All Pages', async () => {
		await visitAdminPage('/edit.php', 'post_type=page');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});

	it('Comments', async () => {
		await visitAdminPage('/edit-comments.php');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});

	it('Widgets', async () => {
		await visitAdminPage('/widgets.php');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});

	it('Menus', async () => {
		await visitAdminPage('/nav-menus.php');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});

	it('Plugins', async () => {
		await visitAdminPage('/plugins.php');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});

	it('All Users', async () => {
		await visitAdminPage('/users.php');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});

	it('Add New User', async () => {
		await visitAdminPage('/user-new.php');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});

	it('Your Profile', async () => {
		await visitAdminPage('/profile.php');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});

	it('Available Tools', async () => {
		await visitAdminPage('/tools.php');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});

	it('Import', async () => {
		await visitAdminPage('/import.php');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});

	it('Export', async () => {
		await visitAdminPage('/export.php');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});

	it('Export Personal Data', async () => {
		await visitAdminPage('/export-personal-data.php');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});

	it('Erase Personal Data', async () => {
		await visitAdminPage('/erase-personal-data.php');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});

	it('Reading Settings', async () => {
		await visitAdminPage('/options-reading.php');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});

	it('Discussion Settings', async () => {
		await visitAdminPage('/options-discussion.php');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});

	it('Media Settings', async () => {
		await visitAdminPage('/options-media.php');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});

	it('Privacy Settings', async () => {
		await visitAdminPage('/options-privacy.php');
		await hideDynamicElements(commonDynamicElements);
		const image = await page.screenshot(screenshotOptions);
		expect(image).toMatchImageSnapshot();
	});
});