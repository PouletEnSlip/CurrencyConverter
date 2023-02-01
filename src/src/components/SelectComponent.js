import React, { useEffect } from "react";

const country_list = {
  AED: "AE",
  AFN: "AF",
  ALL: "AL",
  AMD: "AM",
  AOA: "AO",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  BWP: "BW",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  EGP: "EG",
  ETB: "ET",
  EUR: "EU",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  NGN: "NG",
  NIO: "NI",
  NOK: "BV",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VND: "VN",
  VUV: "VU",
  XAF: "CF",
  XCD: "AG",
  XOF: "BE",
  XPF: "NC",
  YER: "YE",
  ZAR: "ZA"
}

const SelectComponent = ({ selected }) => {
  const loadFlag = (e) => {
    for (let t in country_list) {
      if (t === e.value) {
        e.parentElement.querySelector(".flag").src = `https://flagicons.lipis.dev/flags/4x3/${country_list[t].toLowerCase()}.svg`;
      }
    }
  };

  useEffect(() => {
    const list = document.querySelectorAll("select");
    for (let i = 0; i < list.length; i++) {
      list[i].addEventListener("change", (e) => {
        loadFlag(e.target);
      });
    }
  }, []);
    
  return (
    <div className="drop-list">
      <div className="from">
        <div className="select-box">
          <img src="https://flagicons.lipis.dev/flags/4x3/eu.svg" alt="Pays" className="flag" />
          <select aria-label="devise" id="selectFrom">
            <option value="EUR">EUR</option>
            {Object.entries(country_list).map(([value]) => (
              <option value={value} selected={value === selected}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="icon">&#8646;</div>
      <div className="to">
        <div className="select-box">
          <img src="https://flagicons.lipis.dev/flags/4x3/us.svg" alt="Pays" className="flag" />
          <select aria-label="devise" id="selectTo">
            <option value="USD">USD</option>
            {Object.entries(country_list).map(([value]) => (
              <option value={value} selected={value === selected}>
                {value}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SelectComponent;