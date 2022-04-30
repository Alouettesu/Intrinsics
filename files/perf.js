perf_js = {
	"RDRAND":{
		"RDRAND":{
			"":[
				{"Broadwell":{"l":"Varies","t":"~250"}},
				{"Haswell":{"l":"Varies","t":"~250"}},
				{"Ivy Bridge":{"l":"<200","t":"<200"}}
			]
		}
	},
	"SSE":{
		"STMXCSR":{
			"":[
				{"Broadwell":{"l":"","t":"1"}},
				{"Haswell":{"l":"","t":"1"}},
				{"Ivy Bridge":{"l":"","t":"1"}}
			]
		},
		"ANDPS":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"UNPCKLPS":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"SQRTSS":{
			"":[
				{"Knights Landing":{"l":"25","t":"~20"}},
				{"Broadwell":{"l":"13","t":"4"}},
				{"Haswell":{"l":"13","t":"7"}},
				{"Ivy Bridge":{"l":"14","t":"7"}}
			]
		},
		"SUBSS":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"CMPPS":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"ADDSS":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"SUBPS":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"MOVLHPS":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"MAXPS":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"ANDNPS":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"RCPSS":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"MOVSS":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"MINPS":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"CMPSS":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"MULSS":{
			"":[
				{"Broadwell":{"l":"3","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"MOVUPS":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"CVTSS2SI":{
			"r64, xmm":[
				{"Broadwell":{"l":"4","t":"1"}},
				{"Haswell":{"l":"4","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			],
			"r32, xmm":[
				{"Broadwell":{"l":"4","t":"1"}},
				{"Haswell":{"l":"4","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"MOVHLPS":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"RSQRTSS":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"CVTTSS2SI":{
			"r32, xmm":[
				{"Broadwell":{"l":"4","t":"1"}},
				{"Haswell":{"l":"4","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			],
			"r64, xmm":[
				{"Broadwell":{"l":"4","t":"1"}},
				{"Haswell":{"l":"4","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"MOVMSKPS":{
			"":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"DIVPS":{
			"":[
				{"Knights Landing":{"l":"38","t":"~10"}},
				{"Broadwell":{"l":"<11","t":"4"}},
				{"Haswell":{"l":"<13","t":"6"}},
				{"Ivy Bridge":{"l":"14-Nov","t":"6"}}
			]
		},
		"ORPS":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"SFENCE":{
			"":[
				{"Broadwell":{"l":"","t":"6"}},
				{"Haswell":{"l":"","t":"6"}},
				{"Ivy Bridge":{"l":"","t":"5"}}
			]
		},
		"UCOMISS":{
			"":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"MULPS":{
			"":[
				{"Broadwell":{"l":"3","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"RCPPS":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"DIVSS":{
			"":[
				{"Knights Landing":{"l":"25","t":"~20"}},
				{"Broadwell":{"l":"<11","t":"2.5"}},
				{"Haswell":{"l":"<13","t":"6"}},
				{"Ivy Bridge":{"l":"14-Nov","t":"6"}}
			]
		},
		"MAXSS":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"COMISS":{
			"":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"SQRTPS":{
			"":[
				{"Knights Landing":{"l":"38","t":"~10"}},
				{"Broadwell":{"l":"13","t":"7"}},
				{"Haswell":{"l":"13","t":"7"}},
				{"Ivy Bridge":{"l":"14","t":"7"}}
			]
		},
		"MINSS":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"RSQRTPS":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"CVTSI2SS":{
			"":[
				{"Broadwell":{"l":"4","t":"1"}},
				{"Haswell":{"l":"4","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"XORPS":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"UNPCKHPS":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"MOVAPS":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"ADDPS":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"SHUFPS":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		}
	},
	"AVX512ER":{
		"VRSQRT28SS":{
			"":[
				{"Knights Landing":{"l":"8","t":"3"}}
			]
		},
		"VRCP28SD":{
			"":[
				{"Knights Landing":{"l":"7","t":"2"}}
			]
		},
		"VRCP28PS":{
			"":[
				{"Knights Landing":{"l":"8","t":"3"}}
			]
		},
		"VRCP28SS":{
			"":[
				{"Knights Landing":{"l":"8","t":"3"}}
			]
		},
		"VRSQRT28SD":{
			"":[
				{"Knights Landing":{"l":"7","t":"2"}}
			]
		},
		"VRSQRT28PD":{
			"":[
				{"Knights Landing":{"l":"7","t":"2"}}
			]
		},
		"VRCP28PD":{
			"":[
				{"Knights Landing":{"l":"7","t":"2"}}
			]
		},
		"VRSQRT28PS":{
			"":[
				{"Knights Landing":{"l":"8","t":"3"}}
			]
		},
		"VEXP2PS":{
			"":[
				{"Knights Landing":{"l":"8","t":"3"}}
			]
		},
		"VEXP2PD":{
			"":[
				{"Knights Landing":{"l":"7","t":"2"}}
			]
		}
	},
	"BMI2":{
		"BZHI":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"RORX":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"PDEP":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}}
			]
		},
		"PEXT":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}}
			]
		},
		"MULX":{
			"":[
				{"Broadwell":{"l":"4","t":"1"}},
				{"Haswell":{"l":"4","t":"1"}}
			]
		},
		"SARX":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"SALX":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"SHLX":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		}
	},
	"AVX":{
		"VMOVDDUP":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VUNPCKLPS":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VMULPD":{
			"":[
				{"Broadwell":{"l":"3","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"VMOVMSKPS":{
			"":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VMOVD":{
			"r32/r64, xmm":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			],
			"xmm, r32/r64":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VSQRTPD":{
			"":[
				{"Knights Landing":{"l":"38","t":"~10"}},
				{"Broadwell":{"l":"19-35","t":"16-27"}},
				{"Haswell":{"l":"19-35","t":"16-27"}},
				{"Ivy Bridge":{"l":"19-35","t":"28"}}
			]
		},
		"VADDSUBPD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"VINSERTPS":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VZEROUPPER":{
			"":[
				{"Broadwell":{"l":"0","t":"1"}},
				{"Haswell":{"l":"0","t":"1"}},
				{"Ivy Bridge":{"l":"0","t":"1"}}
			]
		},
		"VEXTRACTF128":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"VPERMILPS":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VBLENDPS":{
			"":[
				{"Broadwell":{"l":"1","t":"0.33"}},
				{"Haswell":{"l":"1","t":"0.33"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"VMOVAPD":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VADDSUBPS":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"VDIVPS":{
			"":[
				{"Knights Landing":{"l":"38","t":"~10"}},
				{"Broadwell":{"l":"13-17","t":"10"}},
				{"Haswell":{"l":"17-21","t":"13"}},
				{"Ivy Bridge":{"l":"18-21","t":"14"}}
			]
		},
		"VINSERTF128":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"VSUBPD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"VMINPS":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"VXORPD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VMASKMOVPS":{
			"m256, ymm, ymm":[
				{"Broadwell":{"l":"","t":"2"}},
				{"Haswell":{"l":"","t":"2"}},
				{"Ivy Bridge":{"l":"","t":"2"}}
			],
			"ymm, ymm, m256":[
				{"Broadwell":{"l":"8","t":"2"}},
				{"Haswell":{"l":"8","t":"2"}},
				{"Ivy Bridge":{"l":"8","t":"2"}}
			]
		},
		"VORPS":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VROUNDPD":{
			"":[
				{"Broadwell":{"l":"6","t":"2"}},
				{"Haswell":{"l":"6","t":"2"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"VSHUFPD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VUNPCKHPD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VCVTPS2PD":{
			"":[
				{"Broadwell":{"l":"4","t":"1"}},
				{"Haswell":{"l":"4","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"VBLENDPD":{
			"":[
				{"Broadwell":{"l":"1","t":"0.33"}},
				{"Haswell":{"l":"1","t":"0.33"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"VBLENDVPS":{
			"":[
				{"Broadwell":{"l":"2","t":"2"}},
				{"Haswell":{"l":"2","t":"2"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VMOVUPD":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VDIVPD":{
			"":[
				{"Knights Landing":{"l":"38","t":"~10"}},
				{"Broadwell":{"l":"16-23","t":"16"}},
				{"Haswell":{"l":"25-35","t":"27"}},
				{"Ivy Bridge":{"l":"27-35","t":"28"}}
			]
		},
		"VBLENDVPD":{
			"":[
				{"Broadwell":{"l":"2","t":"2"}},
				{"Haswell":{"l":"2","t":"2"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VMOVSHDUP":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VROUNDPS":{
			"":[
				{"Broadwell":{"l":"6","t":"2"}},
				{"Haswell":{"l":"6","t":"2"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"VMOVDQU":{
			"":[
				{"Broadwell":{"l":"1","t":"0.25"}},
				{"Haswell":{"l":"1","t":"0.25"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"VEXTRACTPS":{
			"":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"VADDPD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"VMASKMOVPD":{
			"m256, ymm, ymm":[
				{"Broadwell":{"l":"","t":"2"}},
				{"Haswell":{"l":"","t":"2"}},
				{"Ivy Bridge":{"l":"","t":"2"}}
			],
			"ymm, ymm, m256":[
				{"Broadwell":{"l":"","t":"2"}},
				{"Haswell":{"l":"","t":"2"}},
				{"Ivy Bridge":{"l":"","t":"2"}}
			]
		},
		"VTESTPS":{
			"":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"VPERMILPD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VMOVDQA":{
			"":[
				{"Broadwell":{"l":"1","t":"0.25"}},
				{"Haswell":{"l":"1","t":"0.25"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"VCVTDQ2PD":{
			"":[
				{"Broadwell":{"l":"6","t":"1"}},
				{"Haswell":{"l":"6","t":"1"}},
				{"Ivy Bridge":{"l":"4","t":"1"}}
			]
		},
		"VORPD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VANDPD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VMINPD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"VCMPPD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"VSUBPS":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"VANDPS":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VMOVQ":{
			"xmm, r32/r64":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			],
			"xmm, xmm":[
				{"Broadwell":{"l":"1","t":"0.33"}},
				{"Haswell":{"l":"1","t":"0.33"}},
				{"Ivy Bridge":{"l":"1","t":"0.33"}}
			],
			"r32/r64, xmm":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VCVTTPS2DQ":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"VMOVNTDQ":{
			"":[
				{"Broadwell":{"l":"","t":"1"}},
				{"Haswell":{"l":"","t":"1"}},
				{"Ivy Bridge":{"l":"","t":"1"}}
			]
		},
		"VANDNPD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VADDPS":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"VMAXPD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"VPERM2F128":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"VMAXPS":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"VMOVUPS":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VZEROALL":{
			"":[
				{"Broadwell":{"l":"","t":"8"}},
				{"Haswell":{"l":"","t":"8"}},
				{"Ivy Bridge":{"l":"","t":"9"}}
			]
		},
		"VANDNPS":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VCMPPS":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"VMOVSLDUP":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VRCPPS":{
			"":[
				{"Broadwell":{"l":"7","t":"2"}},
				{"Haswell":{"l":"7","t":"2"}},
				{"Ivy Bridge":{"l":"7","t":"2"}}
			]
		},
		"VCVTPS2DQ":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"VCVTTPD2DQ":{
			"":[
				{"Broadwell":{"l":"6","t":"1"}},
				{"Haswell":{"l":"6","t":"1"}},
				{"Ivy Bridge":{"l":"4","t":"1"}}
			]
		},
		"VRSQRTPS":{
			"":[
				{"Broadwell":{"l":"7","t":"2"}},
				{"Haswell":{"l":"7","t":"2"}},
				{"Ivy Bridge":{"l":"7","t":"2"}}
			]
		},
		"VXORPS":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VUNPCKHPS":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VDPPS":{
			"":[
				{"Broadwell":{"l":"12","t":"2"}},
				{"Haswell":{"l":"14","t":"2"}},
				{"Ivy Bridge":{"l":"12","t":"2"}}
			]
		},
		"VMOVNTPS":{
			"":[
				{"Broadwell":{"l":"","t":"1"}},
				{"Haswell":{"l":"","t":"1"}},
				{"Ivy Bridge":{"l":"","t":"1"}}
			]
		},
		"VCVTPD2PS":{
			"":[
				{"Broadwell":{"l":"6","t":"1"}},
				{"Haswell":{"l":"6","t":"1"}},
				{"Ivy Bridge":{"l":"4","t":"1"}}
			]
		},
		"VCVTDQ2PS":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"VMOVAPS":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VSQRTPS":{
			"":[
				{"Knights Landing":{"l":"38","t":"~10"}},
				{"Broadwell":{"l":"18-21","t":"13"}},
				{"Haswell":{"l":"18-21","t":"13"}},
				{"Ivy Bridge":{"l":"18-21","t":"14"}}
			]
		},
		"VUNPCKLPD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VMOVNTPD":{
			"":[
				{"Broadwell":{"l":"","t":"1"}},
				{"Haswell":{"l":"","t":"1"}},
				{"Ivy Bridge":{"l":"","t":"1"}}
			]
		},
		"VMULPS":{
			"":[
				{"Broadwell":{"l":"3","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"VMOVMSKPD":{
			"":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"VCVTPD2DQ":{
			"":[
				{"Broadwell":{"l":"6","t":"1"}},
				{"Haswell":{"l":"6","t":"1"}},
				{"Ivy Bridge":{"l":"4","t":"1"}}
			]
		},
		"VSHUFPS":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		}
	},
	"SSE4.2":{
		"PCMPGTQ":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"PCMPESTRI":{
			"":[
				{"Broadwell":{"l":"10","t":"4"}},
				{"Haswell":{"l":"10","t":"4"}},
				{"Ivy Bridge":{"l":"11","t":"4"}}
			]
		},
		"PCMPESTRM":{
			"":[
				{"Broadwell":{"l":"10","t":"5"}},
				{"Haswell":{"l":"10","t":"5"}},
				{"Ivy Bridge":{"l":"11","t":"4"}}
			]
		},
		"PCMPISTRM":{
			"":[
				{"Broadwell":{"l":"11","t":"3"}},
				{"Haswell":{"l":"11","t":"3"}},
				{"Ivy Bridge":{"l":"11","t":"3"}}
			]
		},
		"CRC32":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"PCMPISTRI":{
			"":[
				{"Broadwell":{"l":"10","t":"3"}},
				{"Haswell":{"l":"10","t":"3"}},
				{"Ivy Bridge":{"l":"11","t":"3"}}
			]
		}
	},
	"SSSE3":{
		"PHSUBD":{
			"":[
				{"Broadwell":{"l":"3","t":"2"}},
				{"Haswell":{"l":"3","t":"2"}},
				{"Ivy Bridge":{"l":"3","t":"1.5"}}
			]
		},
		"PHSUBW":{
			"":[
				{"Broadwell":{"l":"3","t":"2"}},
				{"Haswell":{"l":"3","t":"2"}},
				{"Ivy Bridge":{"l":"3","t":"1.5"}}
			]
		},
		"PHADDD":{
			"":[
				{"Broadwell":{"l":"3","t":"2"}},
				{"Haswell":{"l":"3","t":"2"}},
				{"Ivy Bridge":{"l":"3","t":"1.5"}}
			]
		},
		"PSHUFB":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PABSW":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PSIGNB":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PMADDUBSW":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"PHSUBSW":{
			"":[
				{"Broadwell":{"l":"3","t":"2"}},
				{"Haswell":{"l":"3","t":"2"}},
				{"Ivy Bridge":{"l":"3","t":"1.5"}}
			]
		},
		"PALIGNR":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PHADDSW":{
			"":[
				{"Broadwell":{"l":"3","t":"2"}},
				{"Haswell":{"l":"3","t":"2"}},
				{"Ivy Bridge":{"l":"3","t":"1.5"}}
			]
		},
		"PABSB":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PABSD":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PMULHRSW":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"PHADDW":{
			"":[
				{"Broadwell":{"l":"3","t":"2"}},
				{"Haswell":{"l":"3","t":"2"}},
				{"Ivy Bridge":{"l":"3","t":"1.5"}}
			]
		},
		"PSIGND":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PSIGNW":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		}
	},
	"FXSR":{
		"FXSAVE":{
			"":[
				{"Broadwell":{"l":"","t":"~71"}},
				{"Haswell":{"l":"","t":"~75"}},
				{"Ivy Bridge":{"l":"","t":"~78"}}
			]
		}
	},
	"SSE3":{
		"HADDPS":{
			"":[
				{"Broadwell":{"l":"5","t":"2"}},
				{"Haswell":{"l":"5","t":"2"}},
				{"Ivy Bridge":{"l":"5","t":"2"}}
			]
		},
		"HSUBPS":{
			"":[
				{"Broadwell":{"l":"5","t":"2"}},
				{"Haswell":{"l":"5","t":"2"}},
				{"Ivy Bridge":{"l":"5","t":"2"}}
			]
		},
		"ADDSUBPS":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"HADDPD":{
			"":[
				{"Broadwell":{"l":"5","t":"2"}},
				{"Haswell":{"l":"5","t":"2"}},
				{"Ivy Bridge":{"l":"5","t":"2"}}
			]
		},
		"MOVDDUP":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"MOVSLDUP":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"HSUBPD":{
			"":[
				{"Broadwell":{"l":"5","t":"2"}},
				{"Haswell":{"l":"5","t":"2"}},
				{"Ivy Bridge":{"l":"5","t":"2"}}
			]
		},
		"MOVSHDUP":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"ADDSUBPD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		}
	},
	"BMI1":{
		"ANDN":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"BLSI":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"TZCNT":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}}
			]
		},
		"BLSR":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"BEXTR":{
			"":[
				{"Broadwell":{"l":"2","t":"0.5"}},
				{"Haswell":{"l":"2","t":"0.5"}}
			]
		},
		"BLSMSK":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		}
	},
	"AVX2":{
		"VMPSADBW":{
			"":[
				{"Broadwell":{"l":"6","t":"2"}},
				{"Haswell":{"l":"6","t":"2"}}
			]
		},
		"VEXTRACTI128":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		},
		"VPSHUFD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		},
		"VPSLLVQ":{
			"":[
				{"Broadwell":{"l":"2","t":"2"}},
				{"Haswell":{"l":"2","t":"2"}}
			]
		},
		"VINSERTI128":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}}
			]
		},
		"VPHADDW":{
			"":[
				{"Broadwell":{"l":"3","t":"2"}},
				{"Haswell":{"l":"3","t":"2"}}
			]
		},
		"VPSLLD":{
			"ymm, ymm, xmm":[
				{"Broadwell":{"l":"4","t":"1"}},
				{"Haswell":{"l":"4","t":"1"}}
			],
			"ymm, ymm, imm":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		},
		"VPADDUSB":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"VPBROADCASTD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}}
			]
		},
		"VPADDB":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"VPMULUDQ":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}}
			]
		},
		"VPMULDQ":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}}
			]
		},
		"VPBLENDD":{
			"":[
				{"Broadwell":{"l":"1","t":"0.33"}},
				{"Haswell":{"l":"1","t":"0.33"}}
			]
		},
		"VPSLLQ":{
			"ymm, ymm, xmm":[
				{"Broadwell":{"l":"4","t":"1"}},
				{"Haswell":{"l":"4","t":"1"}}
			],
			"ymm, ymm, imm":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		},
		"VPALIGNR":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		},
		"VPMASKMOVQ":{
			"m256, ymm, ymm":[
				{"Broadwell":{"l":"","t":"2"}},
				{"Haswell":{"l":"","t":"2"}}
			],
			"ymm, ymm, m256":[
				{"Broadwell":{"l":"8","t":"2"}},
				{"Haswell":{"l":"8","t":"2"}}
			]
		},
		"VPHADDD":{
			"":[
				{"Broadwell":{"l":"3","t":"2"}},
				{"Haswell":{"l":"3","t":"2"}}
			]
		},
		"VPCMPEQW":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"VPMULHW":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}}
			]
		},
		"VPSHUFHW":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		},
		"VPSLLW":{
			"ymm, ymm, imm":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			],
			"ymm, ymm, xmm":[
				{"Broadwell":{"l":"4","t":"1"}},
				{"Haswell":{"l":"4","t":"1"}}
			]
		},
		"VPBROADCASTB":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}}
			]
		},
		"VPUNPCKHDQ":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		},
		"VPSRAVD":{
			"":[
				{"Broadwell":{"l":"2","t":"2"}},
				{"Haswell":{"l":"2","t":"2"}}
			]
		},
		"VPMULLW":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}}
			]
		},
		"VPADDQ":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"VPUNPCKHWD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		},
		"VPADDD":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"VPUNPCKLQDQ":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		},
		"VPUNPCKLWD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		},
		"VPCMPEQQ":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"VPMOVZX":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}}
			]
		},
		"VPSIGNQ":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"VPACKSSWB":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		},
		"VPSHUFB":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		},
		"VPMASKMOVD":{
			"m256, ymm, ymm":[
				{"Broadwell":{"l":"","t":"2"}},
				{"Haswell":{"l":"","t":"2"}}
			],
			"ymm, ymm, m256":[
				{"Broadwell":{"l":"8","t":"2"}},
				{"Haswell":{"l":"8","t":"2"}}
			]
		},
		"VPGATHERDD":{
			"ymm, vm32x, ymm":[
				{"Broadwell":{"l":"~19","t":"~6"}},
				{"Haswell":{"l":"~20","t":"~10"}}
			],
			"xmm, vm32x, xmm":[
				{"Broadwell":{"l":"~17","t":"~5"}},
				{"Haswell":{"l":"~14","t":"~7"}}
			]
		},
		"VPADDW":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"VPCMPEQB":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"VPSRAW":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		},
		"VPSADBW":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}}
			]
		},
		"VPBROADCASTSS":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}}
			]
		},
		"VPMULHRSW":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}}
			]
		},
		"VPHADDSW":{
			"":[
				{"Broadwell":{"l":"3","t":"2"}},
				{"Haswell":{"l":"3","t":"2"}}
			]
		},
		"VPAVGB":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"VPCMPGTQ":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}}
			]
		},
		"VPSLLVD":{
			"":[
				{"Broadwell":{"l":"2","t":"2"}},
				{"Haswell":{"l":"2","t":"2"}}
			]
		},
		"VPSIGND":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"VPMULLD":{
			"":[
				{"Broadwell":{"l":"10","t":"2"}},
				{"Haswell":{"l":"10","t":"2"}}
			]
		},
		"VPGATHERQQ":{
			"xmm, vm64x, xmm":[
				{"Broadwell":{"l":"~15","t":"~4"}},
				{"Haswell":{"l":"~12","t":"~5"}}
			],
			"ymm, vm64x, ymm":[
				{"Broadwell":{"l":"~16","t":"~5"}},
				{"Haswell":{"l":"~15","t":"~7"}}
			]
		},
		"VPERMPD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}}
			]
		},
		"VPXOR":{
			"":[
				{"Broadwell":{"l":"1","t":"0.33"}},
				{"Haswell":{"l":"1","t":"0.33"}}
			]
		},
		"VPSIGNW":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"VPACKUSDW":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		},
		"VPUNPCKHBW":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		},
		"VPBLENDW":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		},
		"VPERMPS":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}}
			]
		},
		"VPMOVSX":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}}
			]
		},
		"VPMAXSD":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"VPSLLDQ":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		},
		"VPBLENDVB":{
			"":[
				{"Broadwell":{"l":"2","t":"2"}},
				{"Haswell":{"l":"2","t":"2"}}
			]
		},
		"VPUNPCKLBW":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		},
		"VPUNPCKHQDQ":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		},
		"VPADDSB":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"VPMAXUD":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"VPSIGNB":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"VPCMPEQD":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}}
			]
		},
		"VPBROADCASTSD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}}
			]
		},
		"VPSHUFLW":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		},
		"VPMADDUBSW":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}}
			]
		},
		"VPMADDWD":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}}
			]
		},
		"VPUNPCKLDQ":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		},
		"VPOR":{
			"":[
				{"Broadwell":{"l":"1","t":"0.33"}},
				{"Haswell":{"l":"1","t":"0.33"}}
			]
		},
		"VPSRAD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}}
			]
		}
	},
	"SSE2":{
		"ADDSD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"MAXSD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"PADDSW":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"CVTTSD2SI":{
			"r32, xmm":[
				{"Broadwell":{"l":"4","t":"1"}},
				{"Haswell":{"l":"4","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			],
			"r64, xmm":[
				{"Broadwell":{"l":"4","t":"1"}},
				{"Haswell":{"l":"4","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"PMAX":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PMULUDQ":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"XORPD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"PACKSSWB":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"MULPD":{
			"":[
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"MINSD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"PSLL":{
			"":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"PAVGB":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PSUBUSB":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PCMPGTD":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PUNPCKLQDQ":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PSHUFD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"MOVDQU":{
			"":[
				{"Broadwell":{"l":"1","t":"0.33"}},
				{"Haswell":{"l":"1","t":"0.33"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"MOVAPD":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"CVTPS2PD":{
			"":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"CVTTPS2DQ":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"PEXTRW":{
			"r32, xmm, imm":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"PMADDWD":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"PADDQ":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PSRLD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"SUBSD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"PUNPCKLWD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PSRAD":{
			"xmm, xmm":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			],
			"xmm, imm":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"UNPCKHPD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"CVTTPD2DQ":{
			"":[
				{"Broadwell":{"l":"4","t":"1"}},
				{"Haswell":{"l":"4","t":"1"}},
				{"Ivy Bridge":{"l":"4","t":"1"}}
			]
		},
		"ADDPD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"MOVMSKPD":{
			"":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"PSRL":{
			"":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"PSUBD":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"ANDNPD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"PSHUFLW":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"SQRTSD":{
			"":[
				{"Knights Landing":{"l":"40","t":"~33"}},
				{"Broadwell":{"l":"20","t":"7"}},
				{"Haswell":{"l":"20","t":"13"}},
				{"Ivy Bridge":{"l":"21","t":"14"}}
			]
		},
		"PMULHUW":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"PSLLD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"MOVUPD":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"MASKMOVDQU":{
			"xmm, xmm":[
				{"Broadwell":{"l":"","t":"6"}},
				{"Haswell":{"l":"","t":"6"}},
				{"Ivy Bridge":{"l":"","t":"6"}}
			]
		},
		"PCMPGTB":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PSUBW":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PUNPCKLDQ":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"MOVQ":{
			"":[
				{"Broadwell":{"l":"1","t":"0.33"}},
				{"Haswell":{"l":"1","t":"0.33"}},
				{"Ivy Bridge":{"l":"1","t":"0.33"}}
			]
		},
		"CVTDQ2PD":{
			"":[
				{"Broadwell":{"l":"4","t":"1"}},
				{"Haswell":{"l":"4","t":"1"}},
				{"Ivy Bridge":{"l":"4","t":"1"}}
			]
		},
		"PADDW":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"MOVSD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"DIVSD":{
			"":[
				{"Knights Landing":{"l":"40","t":"~33"}},
				{"Broadwell":{"l":"<14","t":"5"}},
				{"Haswell":{"l":"14-20","t":"13"}},
				{"Ivy Bridge":{"l":"15-20","t":"14"}}
			]
		},
		"CVTSD2SS":{
			"":[
				{"Broadwell":{"l":"4","t":"1"}},
				{"Haswell":{"l":"4","t":"1"}},
				{"Ivy Bridge":{"l":"4","t":"1"}}
			]
		},
		"PMOVMSKB3":{
			"":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"CVTDQ2PS":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"PADDB":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PCMPEQB":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PMULLW":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"MAXPD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"PSUBSW":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"CMPPD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"PXOR":{
			"":[
				{"Broadwell":{"l":"1","t":"0.33"}},
				{"Haswell":{"l":"1","t":"0.33"}},
				{"Ivy Bridge":{"l":"1","t":"0.33"}}
			]
		},
		"PSRLW":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"CVTPD2DQ":{
			"":[
				{"Broadwell":{"l":"4","t":"1"}},
				{"Haswell":{"l":"4","t":"1"}},
				{"Ivy Bridge":{"l":"4","t":"1"}}
			]
		},
		"CMPSD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"CVTSD2SI":{
			"":[
				{"Broadwell":{"l":"4","t":"1"}},
				{"Haswell":{"l":"4","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"PSADBW":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"PSUBUSW":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"MINPD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"SHUFPD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"CVTSS2SD":{
			"":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"PUNPCKHQDQ":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"MOVDQA":{
			"":[
				{"Broadwell":{"l":"1","t":"0.33"}},
				{"Haswell":{"l":"1","t":"0.33"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PUNPCKHBW":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PSUBSB":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PSUBB":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PSHUFHW":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PSLLDQ":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PADDUSW":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"MFENCE":{
			"":[
				{"Broadwell":{"l":"","t":"~35"}},
				{"Haswell":{"l":"","t":"~35"}},
				{"Ivy Bridge":{"l":"","t":"~35"}}
			]
		},
		"PSRLDQ":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"POR":{
			"":[
				{"Broadwell":{"l":"1","t":"0.33"}},
				{"Haswell":{"l":"1","t":"0.33"}},
				{"Ivy Bridge":{"l":"1","t":"0.33"}}
			]
		},
		"CVTPD2PS":{
			"":[
				{"Broadwell":{"l":"4","t":"1"}},
				{"Haswell":{"l":"4","t":"1"}},
				{"Ivy Bridge":{"l":"4","t":"1"}}
			]
		},
		"PMIN":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PAND":{
			"":[
				{"Broadwell":{"l":"1","t":"0.33"}},
				{"Haswell":{"l":"1","t":"0.33"}},
				{"Ivy Bridge":{"l":"1","t":"0.33"}}
			]
		},
		"COMISD":{
			"":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"DIVPD":{
			"":[
				{"Knights Landing":{"l":"38","t":"~10"}},
				{"Broadwell":{"l":"<14","t":"8"}},
				{"Haswell":{"l":"14-20","t":"13"}},
				{"Ivy Bridge":{"l":"15-20","t":"14"}}
			]
		},
		"PSRLQ":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"PANDN":{
			"":[
				{"Broadwell":{"l":"1","t":"0.33"}},
				{"Haswell":{"l":"1","t":"0.33"}},
				{"Ivy Bridge":{"l":"1","t":"0.33"}}
			]
		},
		"PADDUSB":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PCMPEQW":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"UCOMISD":{
			"":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"PMULHW":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"PSUBQ3":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PCMPGTW":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"LFENCE":{
			"":[
				{"Broadwell":{"l":"","t":"5"}},
				{"Haswell":{"l":"","t":"5"}},
				{"Ivy Bridge":{"l":"","t":"4"}}
			]
		},
		"SUBPD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"PUNPCKLBW":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"CVTSI2SD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"4","t":"1"}}
			]
		},
		"PADDSB":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PSRAW":{
			"xmm, imm":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			],
			"xmm, xmm":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"CVTPS2DQ":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"PAVGW":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PUNPCKHWD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"SQRTPD":{
			"":[
				{"Knights Landing":{"l":"38","t":"~10"}},
				{"Broadwell":{"l":"20","t":"13"}},
				{"Haswell":{"l":"20","t":"13"}},
				{"Ivy Bridge":{"l":"21","t":"14"}}
			]
		},
		"PACKUSWB":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PUNPCKHDQ":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"MOVD":{
			"xmm, r32":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			],
			"r64, xmm":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			],
			"r32, xmm":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			],
			"xmm, r64":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"MULSD":{
			"":[
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"PCMPEQD":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PSLLW":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"ANDPD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"PINSRW":{
			"xmm, r32, imm":[
				{"Broadwell":{"l":"2","t":"2"}},
				{"Haswell":{"l":"2","t":"2"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"UNPCKLPD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"PSLLQ":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"PADDD":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"ORPD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"PACKSSDW":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		}
	},
	"FP16C":{
		"VCVTPS2PH":{
			"ymm, xmm, imm":[
				{"Broadwell":{"l":"6","t":"1"}},
				{"Haswell":{"l":"6","t":"1"}},
				{"Ivy Bridge":{"l":"10","t":"1"}}
			],
			"xmm, ymm, imm":[
				{"Broadwell":{"l":"4","t":"1"}},
				{"Haswell":{"l":"4","t":"1"}},
				{"Ivy Bridge":{"l":"9","t":"1"}}
			]
		},
		"VCVTPH2PS":{
			"xmm, xmm":[
				{"Broadwell":{"l":"4","t":"1"}},
				{"Haswell":{"l":"4","t":"1"}},
				{"Ivy Bridge":{"l":"6","t":"1"}}
			],
			"ymm, xmm":[
				{"Broadwell":{"l":"6","t":"1"}},
				{"Haswell":{"l":"6","t":"1"}},
				{"Ivy Bridge":{"l":"7","t":"1"}}
			]
		}
	},
	"AVX512F":{
		"VFNMADD231SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFNMSUB213PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMSUBADD231PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFNMSUB213SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMSUBADD132PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMADDSUB231PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMADD213PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMSUBADD132PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"KANDNW":{
			"":[
				{"Knights Landing":{"l":"2","t":"0.5"}}
			]
		},
		"VFNMSUB231SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMSUB213PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"KXNORW":{
			"":[
				{"Knights Landing":{"l":"2","t":"0.5"}}
			]
		},
		"VFNMADD132PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFNMADD231PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMSUB231SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFNMSUB231SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMSUB213PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMADD132PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMSUB213SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VDIVSD":{
			"":[
				{"Knights Landing":{"l":"40","t":"~33"}}
			]
		},
		"KORTESTW":{
			"":[
				{"Knights Landing":{"l":"2","t":"0.5"}}
			]
		},
		"VFNMADD213SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMADD132PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VSQRTPS":{
			"":[
				{"Knights Landing":{"l":"38","t":"~10"}}
			]
		},
		"VFNMSUB132SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFNMADD213PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFNMADD213PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFNMSUB231PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMSUB231PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFNMADD132SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMSUBADD231PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMADD231PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMSUB132PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMADD213PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMADDSUB132PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFNMSUB132SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMADDSUB213PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFNMSUB231PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMSUB231PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"KMOVW":{
			"":[
				{"Knights Landing":{"l":"2","t":"0.5"}}
			]
		},
		"VFMSUB231SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFNMSUB213SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFNMADD132SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFNMSUB213PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMADD132SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMSUB132SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VDIVPS":{
			"":[
				{"Knights Landing":{"l":"38","t":"~10"}}
			]
		},
		"VFMADD231SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMSUB132SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMADD213SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VSQRTSS":{
			"":[
				{"Knights Landing":{"l":"25","t":"~20"}}
			]
		},
		"VFMSUBADD213PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMSUBADD213PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"KXORW":{
			"":[
				{"Knights Landing":{"l":"2","t":"0.5"}}
			]
		},
		"KANDW":{
			"":[
				{"Knights Landing":{"l":"2","t":"0.5"}}
			]
		},
		"VFNMADD231PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VSQRTPD":{
			"":[
				{"Knights Landing":{"l":"38","t":"~10"}}
			]
		},
		"VFMSUB213SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMSUB132PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMADD231SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"KUNPCKBW":{
			"":[
				{"Knights Landing":{"l":"2","t":"0.5"}}
			]
		},
		"VFMADD132SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMADD213SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VSQRTSD":{
			"":[
				{"Knights Landing":{"l":"40","t":"~33"}}
			]
		},
		"VFMADD231PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFNMSUB132PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VDIVPD":{
			"":[
				{"Knights Landing":{"l":"38","t":"~10"}}
			]
		},
		"VFNMSUB132PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"KORW":{
			"":[
				{"Knights Landing":{"l":"2","t":"0.5"}}
			]
		},
		"VFMADDSUB213PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"KNOTW":{
			"":[
				{"Knights Landing":{"l":"2","t":"0.5"}}
			]
		},
		"VFMADDSUB231PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFNMADD231SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VDIVSS":{
			"":[
				{"Knights Landing":{"l":"25","t":"~20"}}
			]
		},
		"VFNMADD213SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFMADDSUB132PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		},
		"VFNMADD132PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}}
			]
		}
	},
	"PCLMULQDQ":{
		"PCLMULQDQ":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"7","t":"2"}},
				{"Ivy Bridge":{"l":"14","t":"8"}}
			]
		}
	},
	"AES":{
		"AESDECLAST":{
			"":[
				{"Broadwell":{"l":"7","t":"1"}},
				{"Haswell":{"l":"7","t":"1"}},
				{"Ivy Bridge":{"l":"8","t":"1"}}
			]
		},
		"AESENC":{
			"":[
				{"Broadwell":{"l":"7","t":"1"}},
				{"Haswell":{"l":"7","t":"1"}},
				{"Ivy Bridge":{"l":"8","t":"1"}}
			]
		},
		"AESKEYGENASSIST":{
			"":[
				{"Broadwell":{"l":"10","t":"8"}},
				{"Haswell":{"l":"10","t":"8"}},
				{"Ivy Bridge":{"l":"10","t":"8"}}
			]
		},
		"AESENCLAST":{
			"":[
				{"Broadwell":{"l":"7","t":"1"}},
				{"Haswell":{"l":"7","t":"1"}},
				{"Ivy Bridge":{"l":"8","t":"1"}}
			]
		},
		"AESDEC":{
			"":[
				{"Broadwell":{"l":"7","t":"1"}},
				{"Haswell":{"l":"7","t":"1"}},
				{"Ivy Bridge":{"l":"8","t":"1"}}
			]
		},
		"AESIMC":{
			"":[
				{"Broadwell":{"l":"14","t":"2"}},
				{"Haswell":{"l":"14","t":"2"}},
				{"Ivy Bridge":{"l":"14","t":"2"}}
			]
		}
	},
	"SSE4.1":{
		"PMOVZXBQ":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"ROUNDPS":{
			"":[
				{"Broadwell":{"l":"6","t":"2"}},
				{"Haswell":{"l":"6","t":"2"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"PMINSB":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"BLENDPS":{
			"":[
				{"Broadwell":{"l":"1","t":"0.33"}},
				{"Haswell":{"l":"1","t":"0.33"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"ROUNDPD":{
			"":[
				{"Broadwell":{"l":"6","t":"2"}},
				{"Haswell":{"l":"6","t":"2"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"BLENDPD":{
			"":[
				{"Broadwell":{"l":"1","t":"0.33"}},
				{"Haswell":{"l":"1","t":"0.33"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PMOVZXBD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"INSERTPS":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"1"}}
			]
		},
		"PMOVZXWD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PMINUW":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PMAXUD":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PMOVSXBW":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PTEST":{
			"":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"BLENDVPS":{
			"":[
				{"Broadwell":{"l":"2","t":"2"}},
				{"Haswell":{"l":"2","t":"2"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"PCMPEQQ":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PEXTRW":{
			"r32, xmm, imm":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"PMAXSB":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PMAXSD":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PMINUD":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PMOVSXWQ":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"ROUNDSS":{
			"":[
				{"Broadwell":{"l":"6","t":"2"}},
				{"Haswell":{"l":"6","t":"2"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"PMAXUW":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PMINSD":{
			"":[
				{"Broadwell":{"l":"1","t":"0.5"}},
				{"Haswell":{"l":"1","t":"0.5"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PINSRB":{
			"":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"PEXTRD":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"PMOVSXBD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PMULLD":{
			"":[
				{"Broadwell":{"l":"10","t":"2"}},
				{"Haswell":{"l":"10","t":"2"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"PMOVSXDQ":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PMOVSXWD":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PMOVZXWQ":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"ROUNDSD":{
			"":[
				{"Broadwell":{"l":"6","t":"2"}},
				{"Haswell":{"l":"6","t":"2"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"PEXTRB":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		},
		"PBLENVB":{
			"":[
				{"Broadwell":{"l":"2","t":"2"}},
				{"Haswell":{"l":"2","t":"2"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"PMOVSXBQ":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PHMINPOSUW":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"PMOVZXDQ":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PACKUSDW":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"BLENDVPD":{
			"":[
				{"Broadwell":{"l":"2","t":"2"}},
				{"Haswell":{"l":"2","t":"2"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"DPPS":{
			"":[
				{"Broadwell":{"l":"12","t":"2"}},
				{"Haswell":{"l":"14","t":"2"}},
				{"Ivy Bridge":{"l":"13","t":"2"}}
			]
		},
		"PMOVZXBW":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"PINSRD":{
			"":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"PINSRW":{
			"xmm, r32, imm":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		},
		"PMULDQ":{
			"":[
				{"Broadwell":{"l":"5","t":"1"}},
				{"Haswell":{"l":"5","t":"1"}},
				{"Ivy Bridge":{"l":"5","t":"1"}}
			]
		},
		"MPSADBW":{
			"":[
				{"Broadwell":{"l":"6","t":"2"}},
				{"Haswell":{"l":"6","t":"2"}},
				{"Ivy Bridge":{"l":"6","t":"1"}}
			]
		},
		"PBLENDW":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}},
				{"Haswell":{"l":"1","t":"1"}},
				{"Ivy Bridge":{"l":"1","t":"0.5"}}
			]
		},
		"DPPD":{
			"":[
				{"Broadwell":{"l":"7","t":"1"}},
				{"Haswell":{"l":"9","t":"1"}},
				{"Ivy Bridge":{"l":"9","t":"1"}}
			]
		},
		"EXTRACTPS":{
			"":[
				{"Broadwell":{"l":"2","t":"1"}},
				{"Haswell":{"l":"2","t":"1"}},
				{"Ivy Bridge":{"l":"2","t":"1"}}
			]
		}
	},
	"ADX":{
		"ADCX":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}}
			]
		},
		"ADOX":{
			"":[
				{"Broadwell":{"l":"1","t":"1"}}
			]
		}
	},
	"POPCNT":{
		"POPCNT":{
			"r64, r64":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			],
			"r32, r32":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}},
				{"Ivy Bridge":{"l":"3","t":"1"}}
			]
		}
	},
	"LZCNT":{
		"LZCNT":{
			"":[
				{"Broadwell":{"l":"3","t":"1"}},
				{"Haswell":{"l":"3","t":"1"}}
			]
		}
	},
	"RDSEED":{
		"RESEED":{
			"":[
				{"Broadwell":{"l":"Varies","t":"~250"}}
			]
		}
	},
	"FMA":{
		"VFNMADD213PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMSUB132SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMADD132PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMADD213SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMSUB132PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMADDSUB213PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMADD231PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMSUB132PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMADD213SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMADD132SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMSUB213SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMADD132PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMADDSUB213PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMSUB132SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMSUBADD231PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMADD213SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMADD231PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMADDSUB132PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMADD213PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMADDSUB132PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMSUB132PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMSUB231PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMADD231SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMADD132SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMADDSUB231PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMSUB231PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMADD213PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMSUB231SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMADD231SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMSUBADD132PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMSUB132SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMADDSUB231PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMSUB213PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMADD213PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMADD132SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMSUB231SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMSUBADD132PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMSUB213SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMSUB213SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMADD132SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMSUB231PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMSUBADD231PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMSUB213PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMSUB231PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMADD231SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMSUB213PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMADD231SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMSUB213SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMSUB132PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMADD132PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMADD231PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMSUB231SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMSUBADD213PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMSUBADD213PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMSUB231SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMADD231PD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMSUB132SS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMADD213SD":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFMSUB213PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		},
		"VFNMADD132PS":{
			"":[
				{"Knights Landing":{"l":"6","t":"0.5"}},
				{"Broadwell":{"l":"5","t":"0.5"}},
				{"Haswell":{"l":"5","t":"0.5"}}
			]
		}
	}
}
