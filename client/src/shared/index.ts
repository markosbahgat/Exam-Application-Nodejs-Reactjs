export { default as Input } from './input';

export function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ');
}
export function handleSignOut() {
	localStorage.removeItem('user');
	// eslint-disable-next-line no-restricted-globals
	location.reload();
}
