const mockMcsoRecords = [
  {
    swisId: '87809',
    mcsoName: 'Blake, Terry Bernard',
    mcsoAge: '46',
    mcsoGender: 'Male',
    mcsoRace: 'Black',
    mcsoHeight: '5 ft 5 in',
    mcsoWeight: '165 lbs',
    mcsoHair: 'XXX',
    mcsoEyes: 'Brown',
    mcsoArrestingAgency: 'Multnomah County Sheriff Booking',
    mcsoBookingDate: '12/10/2018 07:14 PM',
    mcsoAssignedFacility: 'PERM',
    mcsoProjectedReleaseDate: 'Unknown',
    chargesHTML: `                  <h3>                <span class="court-case-number">Court Case No. <b>None</b></span>                <span class="da-case-number">DA Case No. <b>None</b></span>                <span class="citation-number">Citation No. <b>None</b></span>            </h3>            <div>                <ol>                        <li>
      <span class="charge-description-display">DUII (A Misdemeanor)</span>                            <p class="charge-bail-display">Bail: <span class="charge-bail-value">$0</span></p>                            <p class="charge-status-display">Status: <span class="charge-status-value">Released</span></p>                        </li>
      <li>                            <span class="charge-description-display">FAIL PERF DOD PROP (A Misdemeanor)</span>                            <p class="charge-bail-display">Bail: <span class="charge-bail-value">$0</span></p>                            <p class="charge-status-display">Status: <span class="charge-status-value">Released</span></p>                        </li>                        <li>                            <span class="charge-description-display">RECKLESS DRIVING (A Misdemeanor)</span>
      <p class="charge-bail-display">Bail: <span class="charge-bail-value">$0</span></p>                            <p class="charge-status-display">Status: <span class="charge-status-value">Released</span></p>                        </li>                </ol>            </div>    `
  },
  {
    swisId: '814233',
    mcsoName: 'Blaska, Dylan Tyler',
    mcsoAge: '22',
    mcsoGender: 'Male',
    mcsoRace: 'White',
    mcsoHeight: '5 ft 10 in',
    mcsoWeight: '165 lbs',
    mcsoHair: 'Brown',
    mcsoEyes: 'Green',
    mcsoArrestingAgency: 'Portland Police, East Precinct',
    mcsoBookingDate: '12/06/2018 08:58 PM',
    mcsoAssignedFacility: 'PERM',
    mcsoProjectedReleaseDate: 'Unknown',
    chargesHTML: `                  <h3>                <span class="court-case-number">Court Case No. <b>None</b></span>                <span class="da-case-number">DA Case No. <b>None</b></span>                <span class="citation-number">Citation No. <b>None</b></span>            </h3>            <div>                <ol>                        <li>
      <span class="charge-description-display">DUII (A Misdemeanor)</span>                            <p class="charge-bail-display">Bail: <span class="charge-bail-value">$0</span></p>                            <p class="charge-status-display">Status: <span class="charge-status-value">Released</span></p>                        </li>
      <li>                            <span class="charge-description-display">FAIL PERF DOD PROP (A Misdemeanor)</span>                            <p class="charge-bail-display">Bail: <span class="charge-bail-value">$0</span></p>                            <p class="charge-status-display">Status: <span class="charge-status-value">Released</span></p>                        </li>                        <li>                            <span class="charge-description-display">RECKLESS DRIVING (A Misdemeanor)</span>
      <p class="charge-bail-display">Bail: <span class="charge-bail-value">$0</span></p>                            <p class="charge-status-display">Status: <span class="charge-status-value">Released</span></p>                        </li>                </ol>            </div>    `
  },
  {
    swisId: '801076',
    mcsoName: 'Bledsoe, Tiesha Latrice',
    mcsoAge: '39',
    mcsoGender: 'Female',
    mcsoRace: 'Black',
    mcsoHeight: '5 ft 10 in',
    mcsoWeight: '140 lbs',
    mcsoHair: 'Black',
    mcsoEyes: 'Brown',
    mcsoArrestingAgency: 'Tri-Met Police',
    mcsoBookingDate: '12/06/2018 08:01 AM',
    mcsoAssignedFacility: 'PERM',
    mcsoProjectedReleaseDate: 'Unknown',
    chargesHTML: `                  <h3>                <span class="court-case-number">Court Case No. <b>None</b></span>                <span class="da-case-number">DA Case No. <b>None</b></span>                <span class="citation-number">Citation No. <b>None</b></span>            </h3>            <div>                <ol>                        <li>
      <span class="charge-description-display">DUII (A Misdemeanor)</span>                            <p class="charge-bail-display">Bail: <span class="charge-bail-value">$0</span></p>                            <p class="charge-status-display">Status: <span class="charge-status-value">Released</span></p>                        </li>
      <li>                            <span class="charge-description-display">FAIL PERF DOD PROP (A Misdemeanor)</span>                            <p class="charge-bail-display">Bail: <span class="charge-bail-value">$0</span></p>                            <p class="charge-status-display">Status: <span class="charge-status-value">Released</span></p>                        </li>                        <li>                            <span class="charge-description-display">RECKLESS DRIVING (A Misdemeanor)</span>
      <p class="charge-bail-display">Bail: <span class="charge-bail-value">$0</span></p>                            <p class="charge-status-display">Status: <span class="charge-status-value">Released</span></p>                        </li>                </ol>            </div>    `
  },
  {
    swisId: '800326',
    mcsoName: 'Bleichner, Dillon Charles',
    mcsoAge: '26',
    mcsoGender: 'Male',
    mcsoRace: 'White',
    mcsoHeight: '6 ft 3 in',
    mcsoWeight: '209 lbs',
    mcsoHair: 'Red',
    mcsoEyes: 'Blue',
    mcsoArrestingAgency: 'Portland Police, East Precinct',
    mcsoBookingDate: '12/10/2018 03:12 PM',
    mcsoAssignedFacility: 'MCDC',
    mcsoProjectedReleaseDate: 'Unknown',
    chargesHTML: `                  <h3>                <span class="court-case-number">Court Case No. <b>None</b></span>                <span class="da-case-number">DA Case No. <b>None</b></span>                <span class="citation-number">Citation No. <b>None</b></span>            </h3>            <div>                <ol>                        <li>
      <span class="charge-description-display">DUII (A Misdemeanor)</span>                            <p class="charge-bail-display">Bail: <span class="charge-bail-value">$0</span></p>                            <p class="charge-status-display">Status: <span class="charge-status-value">Released</span></p>                        </li>
      <li>                            <span class="charge-description-display">FAIL PERF DOD PROP (A Misdemeanor)</span>                            <p class="charge-bail-display">Bail: <span class="charge-bail-value">$0</span></p>                            <p class="charge-status-display">Status: <span class="charge-status-value">Released</span></p>                        </li>                        <li>                            <span class="charge-description-display">RECKLESS DRIVING (A Misdemeanor)</span>
      <p class="charge-bail-display">Bail: <span class="charge-bail-value">$0</span></p>                            <p class="charge-status-display">Status: <span class="charge-status-value">Released</span></p>                        </li>                </ol>            </div>    `
  },
  {
    swisId: '814231',
    mcsoName: 'Bodo, Nazia Dhedhy',
    mcsoAge: '31',
    mcsoGender: 'Female',
    mcsoRace: 'P',
    mcsoHeight: '5 ft 2 in',
    mcsoWeight: '0 lbs',
    mcsoHair: 'Black',
    mcsoEyes: 'Green',
    mcsoArrestingAgency: 'Multnomah County Sheriff Booking',
    mcsoBookingDate: '12/10/2018 06:33 PM',
    mcsoAssignedFacility: 'PERM',
    mcsoProjectedReleaseDate: 'Unknown',
    chargesHTML: `                  <h3>                <span class="court-case-number">Court Case No. <b>None</b></span>                <span class="da-case-number">DA Case No. <b>None</b></span>                <span class="citation-number">Citation No. <b>None</b></span>            </h3>            <div>                <ol>                        <li>
      <span class="charge-description-display">DUII (A Misdemeanor)</span>                            <p class="charge-bail-display">Bail: <span class="charge-bail-value">$0</span></p>                            <p class="charge-status-display">Status: <span class="charge-status-value">Released</span></p>                        </li>
      <li>                            <span class="charge-description-display">FAIL PERF DOD PROP (A Misdemeanor)</span>                            <p class="charge-bail-display">Bail: <span class="charge-bail-value">$0</span></p>                            <p class="charge-status-display">Status: <span class="charge-status-value">Released</span></p>                        </li>                        <li>                            <span class="charge-description-display">RECKLESS DRIVING (A Misdemeanor)</span>
      <p class="charge-bail-display">Bail: <span class="charge-bail-value">$0</span></p>                            <p class="charge-status-display">Status: <span class="charge-status-value">Released</span></p>                        </li>                </ol>            </div>    `
  },
  {
    swisId: '734537',
    mcsoName: 'Boling, Lewis Lavern',
    mcsoAge: '31',
    mcsoGender: 'Male',
    mcsoRace: 'White',
    mcsoHeight: '5 ft 8 in',
    mcsoWeight: '250 lbs',
    mcsoHair: 'Red',
    mcsoEyes: 'Blue',
    mcsoArrestingAgency: 'Portland Police, East Precinct',
    mcsoBookingDate: '12/05/2018 04:53 AM',
    mcsoAssignedFacility: 'PERM',
    mcsoProjectedReleaseDate: '12/06/2018',
    chargesHTML: `                  <h3>                <span class="court-case-number">Court Case No. <b>None</b></span>                <span class="da-case-number">DA Case No. <b>None</b></span>                <span class="citation-number">Citation No. <b>None</b></span>            </h3>            <div>                <ol>                        <li>
      <span class="charge-description-display">DUII (A Misdemeanor)</span>                            <p class="charge-bail-display">Bail: <span class="charge-bail-value">$0</span></p>                            <p class="charge-status-display">Status: <span class="charge-status-value">Released</span></p>                        </li>
      <li>                            <span class="charge-description-display">FAIL PERF DOD PROP (A Misdemeanor)</span>                            <p class="charge-bail-display">Bail: <span class="charge-bail-value">$0</span></p>                            <p class="charge-status-display">Status: <span class="charge-status-value">Released</span></p>                        </li>                        <li>                            <span class="charge-description-display">RECKLESS DRIVING (A Misdemeanor)</span>
      <p class="charge-bail-display">Bail: <span class="charge-bail-value">$0</span></p>                            <p class="charge-status-display">Status: <span class="charge-status-value">Released</span></p>                        </li>                </ol>            </div>    `
  },
  {
    swisId: '753872',
    mcsoName: 'Bolokolo, Daniel Bineabi',
    mcsoAge: '35',
    mcsoGender: 'Male',
    mcsoRace: 'Black',
    mcsoHeight: '5 ft 9 in',
    mcsoWeight: '220 lbs',
    mcsoHair: 'Black',
    mcsoEyes: 'Brown',
    mcsoArrestingAgency: 'Portland Police, North Precinct',
    mcsoBookingDate: '12/08/2018 04:03 AM',
    mcsoAssignedFacility: 'MCIJ',
    mcsoProjectedReleaseDate: 'Unknown',
    chargesHTML: `                  <h3>                <span class="court-case-number">Court Case No. <b>None</b></span>                <span class="da-case-number">DA Case No. <b>None</b></span>                <span class="citation-number">Citation No. <b>None</b></span>            </h3>            <div>                <ol>                        <li>
      <span class="charge-description-display">DUII (A Misdemeanor)</span>                            <p class="charge-bail-display">Bail: <span class="charge-bail-value">$0</span></p>                            <p class="charge-status-display">Status: <span class="charge-status-value">Released</span></p>                        </li>
      <li>                            <span class="charge-description-display">FAIL PERF DOD PROP (A Misdemeanor)</span>                            <p class="charge-bail-display">Bail: <span class="charge-bail-value">$0</span></p>                            <p class="charge-status-display">Status: <span class="charge-status-value">Released</span></p>                        </li>                        <li>                            <span class="charge-description-display">RECKLESS DRIVING (A Misdemeanor)</span>
      <p class="charge-bail-display">Bail: <span class="charge-bail-value">$0</span></p>                            <p class="charge-status-display">Status: <span class="charge-status-value">Released</span></p>                        </li>                </ol>            </div>    `
  }
];

export const getMcsoRecords = () => {
  return Promise.resolve(mockMcsoRecords);
};
