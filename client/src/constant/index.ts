import {
	AcademicCapIcon,
	BanknotesIcon,
	CheckBadgeIcon,
	ClockIcon,
	ReceiptRefundIcon,
	UsersIcon
} from '@heroicons/react/24/outline';

export const exams = [
	{
		title: 'English',
		href: '/exams/english',
		icon: ClockIcon,
		iconForeground: 'text-teal-700',
		iconBackground: 'bg-teal-50'
	},
	{
		title: 'Arabic',
		href: '#',
		icon: CheckBadgeIcon,
		iconForeground: 'text-purple-700',
		iconBackground: 'bg-purple-50'
	},
	{
		title: 'Physics',
		href: '#',
		icon: UsersIcon,
		iconForeground: 'text-sky-700',
		iconBackground: 'bg-sky-50'
	},
	{
		title: 'Programming',
		href: '#',
		icon: BanknotesIcon,
		iconForeground: 'text-yellow-700',
		iconBackground: 'bg-yellow-50'
	},
	{
		title: 'Hr Training',
		href: '#',
		icon: ReceiptRefundIcon,
		iconForeground: 'text-rose-700',
		iconBackground: 'bg-rose-50'
	},
	{
		title: 'Web Development',
		href: '#',
		icon: AcademicCapIcon,
		iconForeground: 'text-indigo-700',
		iconBackground: 'bg-indigo-50'
	}
];

export const navigation = [
	{ name: 'Exams', href: '/exams' },
	{ name: 'Portals', href: 'https://www.nagwa.com/en/eg/portals/' },
	{ name: 'Grades', href: 'https://www.nagwa.com/en/eg/' },
	{ name: 'Company', href: 'https://www.nagwa.com/en/guide/' }
];
export const userNavigation = [{ name: 'Your Profile' }, { name: 'Settings' }, { name: 'Sign out' }];

export const answers = [{ name: 'noun' }, { name: 'adverb' }, { name: 'adjective' }, { name: 'verb' }];
