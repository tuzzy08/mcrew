'use client';
import { useState } from 'react';
import {
	TextInput,
	Checkbox,
	Button,
	Group,
	Box,
	Flex,
	Stack,
	Select,
	Textarea,
	Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { DatePickerInput } from '@mantine/dates';

export default function DocumentsPage() {
	const [value, setValue] = useState<Date | null>(null);
	const form = useForm({
		initialValues: {
			email: '',
			termsOfService: false,
		},

		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
		},
	});
	return (
		<>
			<Stack spacing={'xl'}>
				<Title mx='auto' order={1} mb={20}>
					Create New Crew
				</Title>
				<Box maw={750} mx='auto' mt={20}>
					<form onSubmit={form.onSubmit((values) => console.log(values))}>
						<Stack spacing={'xl'}>
							<Group grow>
								<TextInput
									withAsterisk
									label='First Name'
									placeholder='first name'
									{...form.getInputProps('firstName')}
								/>
								<TextInput
									withAsterisk
									label='Middle Name'
									placeholder='middle name'
									{...form.getInputProps('middlename')}
								/>

								<TextInput
									withAsterisk
									label='Last Name'
									placeholder='last name'
									{...form.getInputProps('lastname')}
								/>
							</Group>
							<Flex direction={'row'} gap={'xl'}>
								<DatePickerInput
									clearable
									label='Date of birth'
									placeholder='Pick date'
									value={value}
									onChange={setValue}
									// mx='auto'
									// maw={400}
									miw={200}
								/>
								<Select
									maw={150}
									label='Gender'
									placeholder='select gender'
									data={[
										{ value: 'male', label: 'Male' },
										{ value: 'female', label: 'Female' },
									]}
								/>
								<Select
									maw={250}
									label='Country'
									placeholder='Select Country'
									searchable
									clearable
									nothingFound='No options'
									data={[
										'Afghanistan',
										'Albania',
										'Algeria',
										'Andorra',
										'Angola',
										'Antigua & Deps',
										'Argentina',
										'Armenia',
										'Australia',
										'Austria',
										'Azerbaijan',
										'Bahamas',
										'Bahrain',
										'Bangladesh',
										'Barbados',
										'Belarus',
										'Belgium',
										'Belize',
										'Benin',
										'Bhutan',
										'Bolivia',
										'Bosnia Herzegovina',
										'Botswana',
										'Brazil',
										'Brunei',
										'Bulgaria',
										'Burkina',
										'Burundi',
										'Cambodia',
										'Cameroon',
										'Canada',
										'Cape Verde',
										'Central African Rep',
										'Chad',
										'Chile',
										'China',
										'Colombia',
										'Comoros',
										'Congo',
										'Congo {Democratic Rep}',
										'Costa Rica',
										'Croatia',
										'Cuba',
										'Cyprus',
										'Czech Republic',
										'Denmark',
										'Djibouti',
										'Dominica',
										'Dominican Republic',
										'East Timor',
										'Ecuador',
										'Egypt',
										'El Salvador',
										'Equatorial Guinea',
										'Eritrea',
										'Estonia',
										'Ethiopia',
										'Fiji',
										'Finland',
										'France',
										'Gabon',
										'Gambia',
										'Georgia',
										'Germany',
										'Ghana',
										'Greece',
										'Grenada',
										'Guatemala',
										'Guinea',
										'Guinea-Bissau',
										'Guyana',
										'Haiti',
										'Honduras',
										'Hungary',
										'Iceland',
										'India',
										'Indonesia',
										'Iran',
										'Iraq',
										'Ireland {Republic}',
										'Israel',
										'Italy',
										'Ivory Coast',
										'Jamaica',
										'Japan',
										'Jordan',
										'Kazakhstan',
										'Kenya',
										'Kiribati',
										'Korea North',
										'Korea South',
										'Kosovo',
										'Kuwait',
										'Kyrgyzstan',
										'Laos',
										'Latvia',
										'Lebanon',
										'Lesotho',
										'Liberia',
										'Libya',
										'Liechtenstein',
										'Lithuania',
										'Luxembourg',
										'Macedonia',
										'Madagascar',
										'Malawi',
										'Malaysia',
										'Maldives',
										'Mali',
										'Malta',
										'Marshall Islands',
										'Mauritania',
										'Mauritius',
										'Mexico',
										'Micronesia',
										'Moldova',
										'Monaco',
										'Mongolia',
										'Montenegro',
										'Morocco',
										'Mozambique',
										'Myanmar, {Burma}',
										'Namibia',
										'Nauru',
										'Nepal',
										'Netherlands',
										'New Zealand',
										'Nicaragua',
										'Niger',
										'Nigeria',
										'Norway',
										'Oman',
										'Pakistan',
										'Palau',
										'Panama',
										'Papua New Guinea',
										'Paraguay',
										'Peru',
										'Philippines',
										'Poland',
										'Portugal',
										'Qatar',
										'Romania',
										'Russian Federation',
										'Rwanda',
										'St Kitts & Nevis',
										'St Lucia',
										'Saint Vincent & the Grenadines',
										'Samoa',
										'San Marino',
										'Sao Tome & Principe',
										'Saudi Arabia',
										'Senegal',
										'Serbia',
										'Seychelles',
										'Sierra Leone',
										'Singapore',
										'Slovakia',
										'Slovenia',
										'Solomon Islands',
										'Somalia',
										'South Africa',
										'South Sudan',
										'Spain',
										'Sri Lanka',
										'Sudan',
										'Suriname',
										'Swaziland',
										'Sweden',
										'Switzerland',
										'Syria',
										'Taiwan',
										'Tajikistan',
										'Tanzania',
										'Thailand',
										'Togo',
										'Tonga',
										'Trinidad & Tobago',
										'Tunisia',
										'Turkey',
										'Turkmenistan',
										'Tuvalu',
										'Uganda',
										'Ukraine',
										'United Arab Emirates',
										'United Kingdom',
										'United States',
										'Uruguay',
										'Uzbekistan',
										'Vanuatu',
										'Vatican City',
										'Venezuela',
										'Vietnam',
										'Yemen',
										'Zambia',
										'Zimbabwe',
									]}
								/>
							</Flex>
							<Group>
								<TextInput
									withAsterisk
									label='Email'
									placeholder='your@email.com'
									{...form.getInputProps('email')}
								/>
								<TextInput
									withAsterisk
									label='Mobile Number'
									placeholder='Mobile Number'
									{...form.getInputProps('mobile')}
								/>
								<Select
									maw={250}
									label='Assign Position'
									placeholder='Position'
									data={[
										{ value: 'ab', label: 'Able Seaman' },
										{ value: 'steward', label: 'Steward' },
										{ value: 'cook', label: 'Cook' },
										{ value: 'chiefCook', label: 'Chief CooK' },
										{ value: 'camboss', label: 'Camboss' },
										{ value: 'thirdeng', label: '3rd Engineer' },
										{ value: 'seceng', label: '2nd Engineer' },
										{ value: 'chiefEng', label: 'Chief Engineer' },
										{ value: 'chiefMate', label: 'Chief Mate' },
										{ value: 'secMate', label: 'Second Mate' },
										{ value: 'secOffcr', label: 'Second Officer' },
										{ value: 'chiefOffcr', label: 'Chief Officer' },
										{ value: 'captain', label: 'Captain' },
										{ value: 'medic', label: 'Medic' },
										{ value: 'welder', label: 'Welder' },
										{ value: 'rigger', label: 'Rigger' },
										{ value: 'deckforeman', label: 'Deck Forman' },
										{ value: 'craneOperator', label: 'Crane Operator' },
										{ value: 'hlo', label: 'Helicopter Landing Officer' },
										{ value: 'dpa', label: 'Designated Person Ashore' },
										{ value: 'eto', label: 'ETO' },
										{ value: 'electrician', label: 'Electrician' },
										{ value: 'engineer', label: 'Engineer' },
										{ value: 'pilot', label: 'Pilot' },
										// { value: '', label: '' },
										// { value: '', label: '' },
									]}
								/>
							</Group>
							<Textarea
								maw={500}
								placeholder='Enter residential address'
								label='Residential Address'
								withAsterisk
							/>

							{/* <Checkbox
						mt='md'
						label='I agree to sell my privacy'
						{...form.getInputProps('termsOfService', { type: 'checkbox' })}
					/> */}

							<Group position='right' mt='md'>
								<Button type='submit'>Submit</Button>
							</Group>
						</Stack>
					</form>
				</Box>
			</Stack>
		</>
	);
}
