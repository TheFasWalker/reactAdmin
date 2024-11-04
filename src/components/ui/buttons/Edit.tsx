import { FC } from "react";
interface editButtonInterfase {
    onclick?: () => void
}
export const Edit: FC<editButtonInterfase> = ({ onclick }) => {
    return (
        <button
            className="h-10 w-10 flex items-center justify-center bg-green-700 rounded-lg hover:bg-green-500 hover:shadow-sm"
            onClick={onclick}
            type="button"
        >

            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 1280.000000 799.000000"
            >

                <g className="fill-white" transform="translate(0.000000,799.000000) scale(0.100000,-0.100000)"
                    stroke="none">
                    <path d="M2878 7638 l-3 -352 -105 -31 c-181 -54 -309 -106 -494 -198 l-178
-89 -249 248 -249 249 -535 -535 -535 -535 248 -250 248 -250 -91 -180 c-91
-180 -164 -362 -206 -514 l-22 -81 -354 0 -353 0 0 -760 0 -760 355 0 c310 0
355 -2 355 -15 0 -26 95 -304 140 -410 23 -55 72 -157 108 -228 l67 -127 -248
-248 -247 -247 535 -535 535 -535 248 248 249 249 114 -61 c194 -102 370 -171
657 -257 9 -3 12 -82 12 -354 l0 -350 755 0 755 0 2 352 3 351 105 33 c184 56
300 103 488 196 l184 91 246 -246 247 -247 535 535 535 535 -248 248 -248 248
52 94 c93 171 185 395 244 592 l26 88 352 2 352 3 0 755 0 755 -350 3 -350 3
-58 177 c-60 184 -141 373 -221 514 l-47 82 248 248 248 248 -535 535 -535
535 -247 -247 -246 -246 -159 80 c-169 86 -393 176 -535 214 l-88 24 0 353 0
352 -755 0 -755 0 -2 -352z m910 -1759 c606 -65 1107 -468 1296 -1040 45 -137
81 -423 73 -579 -17 -324 -150 -646 -374 -905 -350 -405 -907 -597 -1434 -495
-314 60 -563 194 -795 425 -177 176 -294 364 -369 589 -153 460 -87 935 186
1346 81 123 281 324 401 403 305 203 667 294 1016 256z"/>
                    <path d="M11428 5493 l-3 -107 -77 -27 c-43 -15 -97 -38 -122 -52 l-44 -24
-78 78 -79 79 -162 -162 c-90 -90 -163 -167 -163 -173 0 -6 33 -44 74 -84 l75
-74 -24 -41 c-13 -23 -35 -76 -50 -118 l-28 -78 -108 0 -109 0 0 -240 0 -240
108 0 109 0 12 -42 c7 -24 29 -78 49 -121 l35 -78 -71 -72 c-40 -40 -72 -77
-72 -82 0 -5 73 -83 162 -172 l163 -163 77 77 77 77 79 -37 c43 -21 98 -43
123 -50 l44 -13 3 -112 3 -112 234 0 234 0 3 111 3 111 75 28 c41 15 95 37
119 49 l44 23 78 -78 79 -79 167 168 168 167 -79 79 -78 78 28 54 c15 30 38
83 50 119 l23 65 111 3 110 3 0 239 0 239 -110 3 -111 3 -23 65 c-12 36 -35
89 -50 119 l-28 54 76 76 76 76 -165 165 -165 165 -73 -73 c-40 -39 -76 -72
-81 -72 -5 0 -36 13 -70 29 -34 16 -87 37 -118 47 l-58 18 0 108 0 108 -235 0
-234 0 -3 -107z m389 -574 c81 -28 131 -60 190 -121 253 -269 127 -699 -232
-793 -214 -55 -444 55 -542 261 -34 71 -38 89 -41 177 -3 60 1 116 8 145 72
267 357 421 617 331z"/>
                    <path d="M8375 3949 c-208 -82 -381 -152 -384 -154 -2 -3 28 -87 67 -187 40
-99 71 -182 70 -183 -40 -24 -179 -149 -250 -224 l-93 -100 -170 74 c-93 41
-175 75 -181 75 -9 0 -350 -768 -342 -774 1 -2 82 -37 178 -79 l175 -76 -5
-58 c-3 -32 -5 -139 -5 -239 l0 -181 -177 -69 c-98 -38 -178 -73 -178 -79 0
-8 298 -774 305 -782 1 -2 80 29 175 67 96 39 179 70 186 70 6 0 31 -26 56
-57 57 -72 146 -164 221 -230 l58 -50 -77 -177 c-44 -101 -73 -180 -68 -185 5
-4 72 -35 149 -68 77 -34 245 -106 373 -162 128 -56 236 -101 241 -101 4 0 41
78 83 172 l75 173 240 0 240 0 68 -175 c37 -96 71 -178 74 -182 3 -3 49 11
101 31 52 21 229 91 393 155 187 74 297 122 294 129 -51 124 -139 358 -136
360 76 52 238 205 311 294 l26 32 178 -79 c99 -43 182 -75 185 -72 7 8 326
740 331 760 2 9 -58 40 -175 90 l-179 77 8 50 c4 28 8 135 8 240 l1 189 170
68 c94 36 174 68 179 70 11 5 -296 788 -309 788 -5 0 -83 -29 -173 -65 -89
-35 -168 -65 -175 -67 -8 -2 -48 38 -89 88 -42 50 -114 124 -160 164 -45 41
-84 77 -86 81 -2 5 31 88 73 184 42 97 75 178 73 180 -2 1 -176 77 -387 169
-292 127 -386 164 -392 154 -5 -7 -41 -89 -81 -181 l-73 -168 -30 7 c-16 4
-124 8 -238 9 l-209 2 -70 176 c-38 98 -75 177 -81 176 -7 0 -183 -67 -392
-150z m916 -1055 c174 -33 312 -107 444 -239 101 -102 161 -197 206 -328 59
-172 61 -330 7 -510 -50 -167 -110 -268 -224 -378 -84 -80 -143 -121 -237
-164 -243 -112 -513 -105 -758 21 -278 144 -459 440 -459 753 0 227 82 429
238 593 206 216 491 307 783 252z"/>
                </g>
            </svg>


        </button>
    )
}