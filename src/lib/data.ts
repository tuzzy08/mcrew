export const categories = [
	{
		name: 'Client Specific Cert (BOSIET, HUET, N1, N2...)',
		id: 1,
		// Client Specific Cert (BOSIET, HUET, N1, N2...)
		sub: [
			{ name: 'Banksman & Slinger Training', parentId: 1 },
			{ name: 'BOSIET / HUET / FOET', parentId: 1 },
			{
				name: 'CA-EBS (Compressed Air Emergency Breathing System)',
				parentId: 1,
			},
			{
				name: 'HERTL (Helicopter Emergency Response Team Leader)',
				parentId: 1,
			},
			{
				name: 'HERTM (Helicopter Emergency Response Team Member)',
				parentId: 1,
			},
			{
				name: 'HOIT (Helideck Operations Initial Training Course)',
				parentId: 1,
			},
			{ name: 'HUET (Helicopter Underwater Emergency Training)', parentId: 1 },
		],
	},
	{
		name: 'Deck',
		id: 2,
		sub: [
			{ name: 'CAA (Civil Aviation Authority)', parentId: 2 },
			{ name: 'Crane Operator Stage 3', parentId: 2 },
			{
				name: 'OPITO HERTL (Helicopter Emergency Response Team Leader)',
				parentId: 2,
			},
		],
	},
	{
		name: 'DP Maintenance',
		id: 3,
		sub: [{ name: 'DP Maintenance Cert', parentId: 3 }],
	},
	{
		name: 'DP Specific Certificate',
		id: 4,
		sub: [
			{ name: 'DP Card', parentId: 4 },
			{ name: 'DP CPD', parentId: 4 },
			{ name: 'DP Log Book', parentId: 4 },
		],
	},
	{
		name: 'Flagstate',
		id: 5,
		sub: [
			{ name: 'Flagstate COC / GMDSS', parentId: 5 },
			{ name: 'Flagstate Seaman Book', parentId: 5 },
		],
	},
	{
		name: 'Medical / Vaccination',
		id: 6,
		sub: [
			{ name: 'COVID 19 Vaccination', parentId: 6 },
			{ name: 'Drugs & Alcohol Test', parentId: 6 },
			{ name: 'Medical Certificate', parentId: 6 },
			{ name: 'Yello Fever Vaccination', parentId: 6 },
		],
	},
	{
		name: 'Other (CV and Other Certificates)',
		id: 7,
		sub: [{ name: 'CV', parentId: 7 }],
	},
	{
		name: 'Seaman Book',
		id: 8,
		sub: [{ name: 'Seaman Book National', parentId: 8 }],
	},
	{
		name: 'Skills (banksman, fitter...)',
		id: 9,
		sub: [
			{
				name: 'Specific Trainings (fitter, HLO, HLA, Radio op, rigger, banksman...)',
				parentId: 9,
			},
		],
	},
	{
		name: 'STCW',
		id: 10,
		sub: [
			{ name: 'AFF (Advanced Fire Fighting)', parentId: 10 },
			{ name: 'BFF (Basic Fire Fighting)', parentId: 10 },
			{ name: 'BRM (Bridge Resource Management)', parentId: 10 },
			{ name: 'BST (Basic Safety Training)', parentId: 10 },
			{
				name: 'ECDIS (Electronic Chart Display & Information System)',
				parentId: 10,
			},
			{ name: 'ERM (Engine Resource Management)', parentId: 10 },
			{ name: 'Food Handling Certificate', parentId: 10 },
			{ name: 'FRB/FRC (Fast Rescue Boat/Craft)', parentId: 10 },
			{ name: 'HV (High Voltage Cert)', parentId: 10 },
			{ name: 'MCOB (Medical Care Onboard)', parentId: 10 },
			{ name: 'MEA (Marine Environmental Awareness)', parentId: 10 },
			{ name: 'MFA (Medical First Aid)', parentId: 10 },
			{
				name: 'PSCRB (Proficiency In Survival Craft & Rescue Boat Other Than Fast Rescue Boat)',
				parentId: 10,
			},
			{ name: 'Radar / ARPA', parentId: 10 },
			{ name: 'SAT (Security Awareness Training)', parentId: 10 },
			{ name: 'SSO (Ship Security Officer)', parentId: 10 },
			{ name: 'STCW Crew Cert', parentId: 10 },
		],
	},
	{
		name: 'STCW (COC)',
		id: 11,
		sub: [
			{
				name: 'COC (Certificate of Competency) Including Endorsement',
				parentId: 11,
			},
		],
	},
	{
		name: 'STCW (CoC, FRC, Crowd Management, GMDSS, etc)',
		id: 12,
		sub: [
			{
				name: 'COC (Certificate of Competency) Including Endorsement',
				parentId: 12,
			},
		],
	},
	{
		name: 'STCW (GOC/GMDSS)',
		id: 13,
		sub: [
			{
				name: 'GMDSS (Global Maritime Distress and Safety System)',
				parentId: 13,
			},
		],
	},
	{
		name: 'Travel Documents',
		id: 14,
		sub: [{ name: 'Passport', parentId: 14 }],
	},
	{
		name: 'MISC',
		id: 15,
		// MISC
		sub: [
			{ name: 'HERTM (Helideck Emergency Response Team Member)', parentId: 15 },
			{ name: 'Cook Certificate', parentId: 15 },
			{ name: 'MEA (Marine Environmental Awareness)', parentId: 15 },
			{
				name: 'SDSD (Ship Security Awareness Training & Seafarers With Designated Security Duties)',
				parentId: 15,
			},
		],
	},
];
