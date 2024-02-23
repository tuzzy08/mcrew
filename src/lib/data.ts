export const categories = [
	{ name: 'Client Specific Cert (BOSIET, HUET, N1, N2...)' },
	{ name: 'Deck' },
	{ name: 'DP Maintenance' },
	{ name: 'DP Specific Certificate' },
	{ name: 'Flagstate' },
	{ name: 'Medical / Vaccination' },
	{ name: 'Other (CV and Other Certificates)' },
	{ name: 'Seaman Book' },
	{ name: 'Skills (banksman, fitter...)' },
	{ name: 'STCW' },
	{ name: 'STCW (COC)' },
	{ name: 'STCW (CoC, FRC, Crowd Management, GMDSS, etc)' },
	{ name: 'STCW (GOC/GMDSS)' },
	{ name: 'Travel Documents' },
	{ name: 'MISC' },
];

export const subCategories = [
	// Client Specific Cert (BOSIET, HUET, N1, N2...)
	{ name: 'Banksman & Slinger Training', parentId: 1 },
	{ name: 'BOSIET / HUET / FOET', parentId: 1 },
	{ name: 'CA-EBS (Compressed Air Emergency Breathing System)', parentId: 1 },
	{ name: 'HERTL (Helicopter Emergency Response Team Leader)', parentId: 1 },
	{ name: 'HERTM (Helicopter Emergency Response Team Member)', parentId: 1 },
	{ name: 'HOIT (Helideck Operations Initial Training Course)', parentId: 1 },
	{ name: 'HUET (Helicopter Underwater Emergency Training)', parentId: 1 },
	// Deck
	{ name: 'CAA (Civil Aviation Authority)', parentId: 2 },
	{ name: 'Crane Operator Stage 3', parentId: 2 },
	{
		name: 'OPITO HERTL (Helicopter Emergency Response Team Leader)',
		parentId: 2,
	},
	// DP Maintenance
	{ name: 'DP Maintenance Cert', parentId: 3 },
	// DP Specific Certificate
	{ name: 'DP Card', parentId: 4 },
	{ name: 'DP CPD', parentId: 4 },
	{ name: 'DP Log Book', parentId: 4 },
	// Flagstate
	{ name: 'Flagstate COC / GMDSS', parentId: 5 },
	{ name: 'Flagstate Seaman Book', parentId: 5 },
	// Medical / Vaccination
	{ name: 'COVID 19 Vaccination', parentId: 6 },
	{ name: 'Drugs & Alcohol Test', parentId: 6 },
	{ name: 'Medical Certificate', parentId: 6 },
	{ name: 'Yello Fever Vaccination', parentId: 6 },
	// Other (CV and Other Certificates)
	{ name: 'CV', parentId: 7 },
	// Seaman Book
	{ name: 'Seaman Book National', parentId: 8 },
	// Skills (banksman, fitter...)
	{
		name: 'Specific Trainings (fitter, HLO, HLA, Radio op, rigger, banksman...)',
		parentId: 9,
	},
	// STCW
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
	// STCW (COC)
	{
		name: 'COC (Certificate of Competency) Including Endorsement',
		parentId: 11,
	},
	// STCW (CoC, FRC, Crowd Management, GMDSS, etc)
	{
		name: 'COC (Certificate of Competency) Including Endorsement',
		parentId: 12,
	},
	// STCW (GOC/GMDSS)
	{ name: 'GMDSS (Global Maritime Distress and Safety System)', parentId: 13 },
	// Travel Documents
	{ name: 'Passport', parentId: 14 },
	// MISC
	{ name: 'HERTM (Helideck Emergency Response Team Member)', parentId: 15 },
	{ name: 'Cook Certificate', parentId: 15 },
	{ name: 'MEA (Marine Environmental Awareness)', parentId: 15 },
	{
		name: 'SDSD (Ship Security Awareness Training & Seafarers With Designated Security Duties)',
		parentId: 15,
	},
];

export const documents = [{}];
