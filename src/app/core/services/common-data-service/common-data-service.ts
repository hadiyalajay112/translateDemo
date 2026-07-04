import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CommonDataService {
  private countryArray = [
    {
      name: "Afghanistan",
      countryCode: "AF",
      countryImage: "https://flagcdn.com/w320/af.png",
    },
    {
      name: "Albania",
      countryCode: "AL",
      countryImage: "https://flagcdn.com/w320/al.png",
    },
    {
      name: "Algeria",
      countryCode: "DZ",
      countryImage: "https://flagcdn.com/w320/dz.png",
    },
    {
      name: "Andorra",
      countryCode: "AD",
      countryImage: "https://flagcdn.com/w320/ad.png",
    },
    {
      name: "Angola",
      countryCode: "AO",
      countryImage: "https://flagcdn.com/w320/ao.png",
    },
    {
      name: "Antigua and Barbuda",
      countryCode: "AG",
      countryImage: "https://flagcdn.com/w320/ag.png",
    },
    {
      name: "Argentina",
      countryCode: "AR",
      countryImage: "https://flagcdn.com/w320/ar.png",
    },
    {
      name: "Armenia",
      countryCode: "AM",
      countryImage: "https://flagcdn.com/w320/am.png",
    },
    {
      name: "Australia",
      countryCode: "AU",
      countryImage: "https://flagcdn.com/w320/au.png",
    },
    {
      name: "Austria",
      countryCode: "AT",
      countryImage: "https://flagcdn.com/w320/at.png",
    },
    {
      name: "Azerbaijan",
      countryCode: "AZ",
      countryImage: "https://flagcdn.com/w320/az.png",
    },
    {
      name: "Bahamas",
      countryCode: "BS",
      countryImage: "https://flagcdn.com/w320/bs.png",
    },
    {
      name: "Bahrain",
      countryCode: "BH",
      countryImage: "https://flagcdn.com/w320/bh.png",
    },
    {
      name: "Bangladesh",
      countryCode: "BD",
      countryImage: "https://flagcdn.com/w320/bd.png",
    },
    {
      name: "Barbados",
      countryCode: "BB",
      countryImage: "https://flagcdn.com/w320/bb.png",
    },
    {
      name: "Belarus",
      countryCode: "BY",
      countryImage: "https://flagcdn.com/w320/by.png",
    },
    {
      name: "Belgium",
      countryCode: "BE",
      countryImage: "https://flagcdn.com/w320/be.png",
    },
    {
      name: "Belize",
      countryCode: "BZ",
      countryImage: "https://flagcdn.com/w320/bz.png",
    },
    {
      name: "Benin",
      countryCode: "BJ",
      countryImage: "https://flagcdn.com/w320/bj.png",
    },
    {
      name: "Bhutan",
      countryCode: "BT",
      countryImage: "https://flagcdn.com/w320/bt.png",
    },
    {
      name: "Bolivia",
      countryCode: "BO",
      countryImage: "https://flagcdn.com/w320/bo.png",
    },
    {
      name: "Bosnia and Herzegovina",
      countryCode: "BA",
      countryImage: "https://flagcdn.com/w320/ba.png",
    },
    {
      name: "Botswana",
      countryCode: "BW",
      countryImage: "https://flagcdn.com/w320/bw.png",
    },
    {
      name: "Brazil",
      countryCode: "BR",
      countryImage: "https://flagcdn.com/w320/br.png",
    },
    {
      name: "Brunei",
      countryCode: "BN",
      countryImage: "https://flagcdn.com/w320/bn.png",
    },
    {
      name: "Bulgaria",
      countryCode: "BG",
      countryImage: "https://flagcdn.com/w320/bg.png",
    },
    {
      name: "Burkina Faso",
      countryCode: "BF",
      countryImage: "https://flagcdn.com/w320/bf.png",
    },
    {
      name: "Burundi",
      countryCode: "BI",
      countryImage: "https://flagcdn.com/w320/bi.png",
    },
    {
      name: "Cabo Verde",
      countryCode: "CV",
      countryImage: "https://flagcdn.com/w320/cv.png",
    },
    {
      name: "Cambodia",
      countryCode: "KH",
      countryImage: "https://flagcdn.com/w320/kh.png",
    },
    {
      name: "Cameroon",
      countryCode: "CM",
      countryImage: "https://flagcdn.com/w320/cm.png",
    },
    {
      name: "Canada",
      countryCode: "CA",
      countryImage: "https://flagcdn.com/w320/ca.png",
    },
    {
      name: "Central African Republic",
      countryCode: "CF",
      countryImage: "https://flagcdn.com/w320/cf.png",
    },
    {
      name: "Chad",
      countryCode: "TD",
      countryImage: "https://flagcdn.com/w320/td.png",
    },
    {
      name: "Chile",
      countryCode: "CL",
      countryImage: "https://flagcdn.com/w320/cl.png",
    },
    {
      name: "China",
      countryCode: "CN",
      countryImage: "https://flagcdn.com/w320/cn.png",
    },
    {
      name: "Colombia",
      countryCode: "CO",
      countryImage: "https://flagcdn.com/w320/co.png",
    },
    {
      name: "Comoros",
      countryCode: "KM",
      countryImage: "https://flagcdn.com/w320/km.png",
    },
    {
      name: "Congo (Republic of the)",
      countryCode: "CG",
      countryImage: "https://flagcdn.com/w320/cg.png",
    },
    {
      name: "Democratic Republic of the Congo",
      countryCode: "CD",
      countryImage: "https://flagcdn.com/w320/cd.png",
    },
    {
      name: "Costa Rica",
      countryCode: "CR",
      countryImage: "https://flagcdn.com/w320/cr.png",
    },
    {
      name: "Croatia",
      countryCode: "HR",
      countryImage: "https://flagcdn.com/w320/hr.png",
    },
    {
      name: "Cuba",
      countryCode: "CU",
      countryImage: "https://flagcdn.com/w320/cu.png",
    },
    {
      name: "Cyprus",
      countryCode: "CY",
      countryImage: "https://flagcdn.com/w320/cy.png",
    },
    {
      name: "Czechia",
      countryCode: "CZ",
      countryImage: "https://flagcdn.com/w320/cz.png",
    },
    {
      name: "Denmark",
      countryCode: "DK",
      countryImage: "https://flagcdn.com/w320/dk.png",
    },
    {
      name: "Djibouti",
      countryCode: "DJ",
      countryImage: "https://flagcdn.com/w320/dj.png",
    },
    {
      name: "Dominica",
      countryCode: "DM",
      countryImage: "https://flagcdn.com/w320/dm.png",
    },
    {
      name: "Dominican Republic",
      countryCode: "DO",
      countryImage: "https://flagcdn.com/w320/do.png",
    },
    {
      name: "Ecuador",
      countryCode: "EC",
      countryImage: "https://flagcdn.com/w320/ec.png",
    },
    {
      name: "Egypt",
      countryCode: "EG",
      countryImage: "https://flagcdn.com/w320/eg.png",
    },
    {
      name: "El Salvador",
      countryCode: "SV",
      countryImage: "https://flagcdn.com/w320/sv.png",
    },
    {
      name: "Equatorial Guinea",
      countryCode: "GQ",
      countryImage: "https://flagcdn.com/w320/gq.png",
    },
    {
      name: "Eritrea",
      countryCode: "ER",
      countryImage: "https://flagcdn.com/w320/er.png",
    },
    {
      name: "Estonia",
      countryCode: "EE",
      countryImage: "https://flagcdn.com/w320/ee.png",
    },
    {
      name: "Eswatini",
      countryCode: "SZ",
      countryImage: "https://flagcdn.com/w320/sz.png",
    },
    {
      name: "Ethiopia",
      countryCode: "ET",
      countryImage: "https://flagcdn.com/w320/et.png",
    },
    {
      name: "Fiji",
      countryCode: "FJ",
      countryImage: "https://flagcdn.com/w320/fj.png",
    },
    {
      name: "Finland",
      countryCode: "FI",
      countryImage: "https://flagcdn.com/w320/fi.png",
    },
    {
      name: "France",
      countryCode: "FR",
      countryImage: "https://flagcdn.com/w320/fr.png",
    },
    {
      name: "Gabon",
      countryCode: "GA",
      countryImage: "https://flagcdn.com/w320/ga.png",
    },
    {
      name: "Gambia",
      countryCode: "GM",
      countryImage: "https://flagcdn.com/w320/gm.png",
    },
    {
      name: "Georgia",
      countryCode: "GE",
      countryImage: "https://flagcdn.com/w320/ge.png",
    },
    {
      name: "Germany",
      countryCode: "DE",
      countryImage: "https://flagcdn.com/w320/de.png",
    },
    {
      name: "Ghana",
      countryCode: "GH",
      countryImage: "https://flagcdn.com/w320/gh.png",
    },
    {
      name: "Greece",
      countryCode: "GR",
      countryImage: "https://flagcdn.com/w320/gr.png",
    },
    {
      name: "Grenada",
      countryCode: "GD",
      countryImage: "https://flagcdn.com/w320/gd.png",
    },
    {
      name: "Guatemala",
      countryCode: "GT",
      countryImage: "https://flagcdn.com/w320/gt.png",
    },
    {
      name: "Guinea",
      countryCode: "GN",
      countryImage: "https://flagcdn.com/w320/gn.png",
    },
    {
      name: "Guinea-Bissau",
      countryCode: "GW",
      countryImage: "https://flagcdn.com/w320/gw.png",
    },
    {
      name: "Guyana",
      countryCode: "GY",
      countryImage: "https://flagcdn.com/w320/gy.png",
    },
    {
      name: "Haiti",
      countryCode: "HT",
      countryImage: "https://flagcdn.com/w320/ht.png",
    },
    {
      name: "Holy See",
      countryCode: "VA",
      countryImage: "https://flagcdn.com/w320/va.png",
    },
    {
      name: "Honduras",
      countryCode: "HN",
      countryImage: "https://flagcdn.com/w320/hn.png",
    },
    {
      name: "Hungary",
      countryCode: "HU",
      countryImage: "https://flagcdn.com/w320/hu.png",
    },
    {
      name: "Iceland",
      countryCode: "IS",
      countryImage: "https://flagcdn.com/w320/is.png",
    },
    {
      name: "India",
      countryCode: "IN",
      countryImage: "https://flagcdn.com/w320/in.png",
    },
    {
      name: "Indonesia",
      countryCode: "ID",
      countryImage: "https://flagcdn.com/w320/id.png",
    },
    {
      name: "Iran",
      countryCode: "IR",
      countryImage: "https://flagcdn.com/w320/ir.png",
    },
    {
      name: "Iraq",
      countryCode: "IQ",
      countryImage: "https://flagcdn.com/w320/iq.png",
    },
    {
      name: "Ireland",
      countryCode: "IE",
      countryImage: "https://flagcdn.com/w320/ie.png",
    },
    {
      name: "Israel",
      countryCode: "IL",
      countryImage: "https://flagcdn.com/w320/il.png",
    },
    {
      name: "Italy",
      countryCode: "IT",
      countryImage: "https://flagcdn.com/w320/it.png",
    },
    {
      name: "Jamaica",
      countryCode: "JM",
      countryImage: "https://flagcdn.com/w320/jm.png",
    },
    {
      name: "Japan",
      countryCode: "JP",
      countryImage: "https://flagcdn.com/w320/jp.png",
    },
    {
      name: "Jordan",
      countryCode: "JO",
      countryImage: "https://flagcdn.com/w320/jo.png",
    },
    {
      name: "Kazakhstan",
      countryCode: "KZ",
      countryImage: "https://flagcdn.com/w320/kz.png",
    },
    {
      name: "Kenya",
      countryCode: "KE",
      countryImage: "https://flagcdn.com/w320/ke.png",
    },
    {
      name: "Kiribati",
      countryCode: "KI",
      countryImage: "https://flagcdn.com/w320/ki.png",
    },
    {
      name: "Kuwait",
      countryCode: "KW",
      countryImage: "https://flagcdn.com/w320/kw.png",
    },
    {
      name: "Kyrgyzstan",
      countryCode: "KG",
      countryImage: "https://flagcdn.com/w320/kg.png",
    },
    {
      name: "Laos",
      countryCode: "LA",
      countryImage: "https://flagcdn.com/w320/la.png",
    },
    {
      name: "Latvia",
      countryCode: "LV",
      countryImage: "https://flagcdn.com/w320/lv.png",
    },
    {
      name: "Lebanon",
      countryCode: "LB",
      countryImage: "https://flagcdn.com/w320/lb.png",
    },
    {
      name: "Lesotho",
      countryCode: "LS",
      countryImage: "https://flagcdn.com/w320/ls.png",
    },
    {
      name: "Liberia",
      countryCode: "LR",
      countryImage: "https://flagcdn.com/w320/lr.png",
    },
    {
      name: "Libya",
      countryCode: "LY",
      countryImage: "https://flagcdn.com/w320/ly.png",
    },
    {
      name: "Liechtenstein",
      countryCode: "LI",
      countryImage: "https://flagcdn.com/w320/li.png",
    },
    {
      name: "Lithuania",
      countryCode: "LT",
      countryImage: "https://flagcdn.com/w320/lt.png",
    },
    {
      name: "Luxembourg",
      countryCode: "LU",
      countryImage: "https://flagcdn.com/w320/lu.png",
    },
    {
      name: "Madagascar",
      countryCode: "MG",
      countryImage: "https://flagcdn.com/w320/mg.png",
    },
    {
      name: "Malawi",
      countryCode: "MW",
      countryImage: "https://flagcdn.com/w320/mw.png",
    },
    {
      name: "Malaysia",
      countryCode: "MY",
      countryImage: "https://flagcdn.com/w320/my.png",
    },
    {
      name: "Maldives",
      countryCode: "MV",
      countryImage: "https://flagcdn.com/w320/mv.png",
    },
    {
      name: "Mali",
      countryCode: "ML",
      countryImage: "https://flagcdn.com/w320/ml.png",
    },
    {
      name: "Malta",
      countryCode: "MT",
      countryImage: "https://flagcdn.com/w320/mt.png",
    },
    {
      name: "Marshall Islands",
      countryCode: "MH",
      countryImage: "https://flagcdn.com/w320/mh.png",
    },
    {
      name: "Mauritania",
      countryCode: "MR",
      countryImage: "https://flagcdn.com/w320/mr.png",
    },
    {
      name: "Mauritius",
      countryCode: "MU",
      countryImage: "https://flagcdn.com/w320/mu.png",
    },
    {
      name: "Mexico",
      countryCode: "MX",
      countryImage: "https://flagcdn.com/w320/mx.png",
    },
    {
      name: "Micronesia",
      countryCode: "FM",
      countryImage: "https://flagcdn.com/w320/fm.png",
    },
    {
      name: "Moldova",
      countryCode: "MD",
      countryImage: "https://flagcdn.com/w320/md.png",
    },
    {
      name: "Monaco",
      countryCode: "MC",
      countryImage: "https://flagcdn.com/w320/mc.png",
    },
    {
      name: "Mongolia",
      countryCode: "MN",
      countryImage: "https://flagcdn.com/w320/mn.png",
    },
    {
      name: "Montenegro",
      countryCode: "ME",
      countryImage: "https://flagcdn.com/w320/me.png",
    },
    {
      name: "Morocco",
      countryCode: "MA",
      countryImage: "https://flagcdn.com/w320/ma.png",
    },
    {
      name: "Mozambique",
      countryCode: "MZ",
      countryImage: "https://flagcdn.com/w320/mz.png",
    },
    {
      name: "Myanmar",
      countryCode: "MM",
      countryImage: "https://flagcdn.com/w320/mm.png",
    },
    {
      name: "Namibia",
      countryCode: "NA",
      countryImage: "https://flagcdn.com/w320/na.png",
    },
    {
      name: "Nauru",
      countryCode: "NR",
      countryImage: "https://flagcdn.com/w320/nr.png",
    },
    {
      name: "Nepal",
      countryCode: "NP",
      countryImage: "https://flagcdn.com/w320/np.png",
    },
    {
      name: "Netherlands",
      countryCode: "NL",
      countryImage: "https://flagcdn.com/w320/nl.png",
    },
    {
      name: "New Zealand",
      countryCode: "NZ",
      countryImage: "https://flagcdn.com/w320/nz.png",
    },
    {
      name: "Nicaragua",
      countryCode: "NI",
      countryImage: "https://flagcdn.com/w320/ni.png",
    },
    {
      name: "Niger",
      countryCode: "NE",
      countryImage: "https://flagcdn.com/w320/ne.png",
    },
    {
      name: "Nigeria",
      countryCode: "NG",
      countryImage: "https://flagcdn.com/w320/ng.png",
    },
    {
      name: "North Korea",
      countryCode: "KP",
      countryImage: "https://flagcdn.com/w320/kp.png",
    },
    {
      name: "North Macedonia",
      countryCode: "MK",
      countryImage: "https://flagcdn.com/w320/mk.png",
    },
    {
      name: "Norway",
      countryCode: "NO",
      countryImage: "https://flagcdn.com/w320/no.png",
    },
    {
      name: "Oman",
      countryCode: "OM",
      countryImage: "https://flagcdn.com/w320/om.png",
    },
    {
      name: "Pakistan",
      countryCode: "PK",
      countryImage: "https://flagcdn.com/w320/pk.png",
    },
    {
      name: "Palau",
      countryCode: "PW",
      countryImage: "https://flagcdn.com/w320/pw.png",
    },
    {
      name: "Palestine",
      countryCode: "PS",
      countryImage: "https://flagcdn.com/w320/ps.png",
    },
    {
      name: "Panama",
      countryCode: "PA",
      countryImage: "https://flagcdn.com/w320/pa.png",
    },
    {
      name: "Papua New Guinea",
      countryCode: "PG",
      countryImage: "https://flagcdn.com/w320/pg.png",
    },
    {
      name: "Paraguay",
      countryCode: "PY",
      countryImage: "https://flagcdn.com/w320/py.png",
    },
    {
      name: "Peru",
      countryCode: "PE",
      countryImage: "https://flagcdn.com/w320/pe.png",
    },
    {
      name: "Philippines",
      countryCode: "PH",
      countryImage: "https://flagcdn.com/w320/ph.png",
    },
    {
      name: "Poland",
      countryCode: "PL",
      countryImage: "https://flagcdn.com/w320/pl.png",
    },
    {
      name: "Portugal",
      countryCode: "PT",
      countryImage: "https://flagcdn.com/w320/pt.png",
    },
    {
      name: "Qatar",
      countryCode: "QA",
      countryImage: "https://flagcdn.com/w320/qa.png",
    },
    {
      name: "Romania",
      countryCode: "RO",
      countryImage: "https://flagcdn.com/w320/ro.png",
    },
    {
      name: "Russia",
      countryCode: "RU",
      countryImage: "https://flagcdn.com/w320/ru.png",
    },
    {
      name: "Rwanda",
      countryCode: "RW",
      countryImage: "https://flagcdn.com/w320/rw.png",
    },
    {
      name: "Saint Kitts and Nevis",
      countryCode: "KN",
      countryImage: "https://flagcdn.com/w320/kn.png",
    },
    {
      name: "Saint Lucia",
      countryCode: "LC",
      countryImage: "https://flagcdn.com/w320/lc.png",
    },
    {
      name: "Saint Vincent and the Grenadines",
      countryCode: "VC",
      countryImage: "https://flagcdn.com/w320/vc.png",
    },
    {
      name: "Samoa",
      countryCode: "WS",
      countryImage: "https://flagcdn.com/w320/ws.png",
    },
    {
      name: "San Marino",
      countryCode: "SM",
      countryImage: "https://flagcdn.com/w320/sm.png",
    },
    {
      name: "Sao Tome and Principe",
      countryCode: "ST",
      countryImage: "https://flagcdn.com/w320/st.png",
    },
    {
      name: "Saudi Arabia",
      countryCode: "SA",
      countryImage: "https://flagcdn.com/w320/sa.png",
    },
    {
      name: "Senegal",
      countryCode: "SN",
      countryImage: "https://flagcdn.com/w320/sn.png",
    },
    {
      name: "Serbia",
      countryCode: "RS",
      countryImage: "https://flagcdn.com/w320/rs.png",
    },
    {
      name: "Seychelles",
      countryCode: "SC",
      countryImage: "https://flagcdn.com/w320/sc.png",
    },
    {
      name: "Sierra Leone",
      countryCode: "SL",
      countryImage: "https://flagcdn.com/w320/sl.png",
    },
    {
      name: "Singapore",
      countryCode: "SG",
      countryImage: "https://flagcdn.com/w320/sg.png",
    },
    {
      name: "Slovakia",
      countryCode: "SK",
      countryImage: "https://flagcdn.com/w320/sk.png",
    },
    {
      name: "Slovenia",
      countryCode: "SI",
      countryImage: "https://flagcdn.com/w320/si.png",
    },
    {
      name: "Solomon Islands",
      countryCode: "SB",
      countryImage: "https://flagcdn.com/w320/sb.png",
    },
    {
      name: "Somalia",
      countryCode: "SO",
      countryImage: "https://flagcdn.com/w320/so.png",
    },
    {
      name: "South Africa",
      countryCode: "ZA",
      countryImage: "https://flagcdn.com/w320/za.png",
    },
    {
      name: "South Korea",
      countryCode: "KR",
      countryImage: "https://flagcdn.com/w320/kr.png",
    },
    {
      name: "South Sudan",
      countryCode: "SS",
      countryImage: "https://flagcdn.com/w320/ss.png",
    },
    {
      name: "Spain",
      countryCode: "ES",
      countryImage: "https://flagcdn.com/w320/es.png",
    },
    {
      name: "Sri Lanka",
      countryCode: "LK",
      countryImage: "https://flagcdn.com/w320/lk.png",
    },
    {
      name: "Sudan",
      countryCode: "SD",
      countryImage: "https://flagcdn.com/w320/sd.png",
    },
    {
      name: "Suriname",
      countryCode: "SR",
      countryImage: "https://flagcdn.com/w320/sr.png",
    },
    {
      name: "Sweden",
      countryCode: "SE",
      countryImage: "https://flagcdn.com/w320/se.png",
    },
    {
      name: "Switzerland",
      countryCode: "CH",
      countryImage: "https://flagcdn.com/w320/ch.png",
    },
    {
      name: "Syria",
      countryCode: "SY",
      countryImage: "https://flagcdn.com/w320/sy.png",
    },
    {
      name: "Tajikistan",
      countryCode: "TJ",
      countryImage: "https://flagcdn.com/w320/tj.png",
    },
    {
      name: "Tanzania",
      countryCode: "TZ",
      countryImage: "https://flagcdn.com/w320/tz.png",
    },
    {
      name: "Thailand",
      countryCode: "TH",
      countryImage: "https://flagcdn.com/w320/th.png",
    },
    {
      name: "Timor-Leste",
      countryCode: "TL",
      countryImage: "https://flagcdn.com/w320/tl.png",
    },
    {
      name: "Togo",
      countryCode: "TG",
      countryImage: "https://flagcdn.com/w320/tg.png",
    },
    {
      name: "Tonga",
      countryCode: "TO",
      countryImage: "https://flagcdn.com/w320/to.png",
    },
    {
      name: "Trinidad and Tobago",
      countryCode: "TT",
      countryImage: "https://flagcdn.com/w320/tt.png",
    },
    {
      name: "Tunisia",
      countryCode: "TN",
      countryImage: "https://flagcdn.com/w320/tn.png",
    },
    {
      name: "Turkey",
      countryCode: "TR",
      countryImage: "https://flagcdn.com/w320/tr.png",
    },
    {
      name: "Turkmenistan",
      countryCode: "TM",
      countryImage: "https://flagcdn.com/w320/tm.png",
    },
    {
      name: "Tuvalu",
      countryCode: "TV",
      countryImage: "https://flagcdn.com/w320/tv.png",
    },
    {
      name: "Uganda",
      countryCode: "UG",
      countryImage: "https://flagcdn.com/w320/ug.png",
    },
    {
      name: "Ukraine",
      countryCode: "UA",
      countryImage: "https://flagcdn.com/w320/ua.png",
    },
    {
      name: "United Arab Emirates",
      countryCode: "AE",
      countryImage: "https://flagcdn.com/w320/ae.png",
    },
    {
      name: "United Kingdom",
      countryCode: "GB",
      countryImage: "https://flagcdn.com/w320/gb.png",
    },
    {
      name: "United States",
      countryCode: "US",
      countryImage: "https://flagcdn.com/w320/us.png",
    },
    {
      name: "Uruguay",
      countryCode: "UY",
      countryImage: "https://flagcdn.com/w320/uy.png",
    },
    {
      name: "Uzbekistan",
      countryCode: "UZ",
      countryImage: "https://flagcdn.com/w320/uz.png",
    },
    {
      name: "Vanuatu",
      countryCode: "VU",
      countryImage: "https://flagcdn.com/w320/vu.png",
    },
    {
      name: "Venezuela",
      countryCode: "VE",
      countryImage: "https://flagcdn.com/w320/ve.png",
    },
    {
      name: "Vietnam",
      countryCode: "VN",
      countryImage: "https://flagcdn.com/w320/vn.png",
    },
    {
      name: "Yemen",
      countryCode: "YE",
      countryImage: "https://flagcdn.com/w320/ye.png",
    },
    {
      name: "Zambia",
      countryCode: "ZM",
      countryImage: "https://flagcdn.com/w320/zm.png",
    },
    {
      name: "Zimbabwe",
      countryCode: "ZW",
      countryImage: "https://flagcdn.com/w320/zw.png",
    },
  ];

  getCountries() {
    return this.countryArray;
  }
}
