!(function (t) {
  var e,
    c,
    o,
    i,
    n,
    l =
      '<svg><symbol id="icon-bilibili" viewBox="0 0 2299 1024"><path d="M1775.840814 322.588002c6.0164 1.002733 53.144869-9.525967 55.150336-6.016401 3.0082 4.5123 24.065601 155.92504 18.550567 156.927774s-44.621635 10.027334-44.621635 10.027334c-3.0082-20.556034-28.577901-147.903173-29.079268-160.938707m75.205003-14.539634l20.556034 162.944174c10.5287-0.501367 53.144869-3.509567 57.155803-4.010934-6.0164-61.668103-16.545101-158.933241-16.545101-158.93324-20.054668-4.010934-41.112069-4.010934-61.166736 0m-40.610702 226.116376s92.752838-23.564234 126.344406-12.0328c17.046467 61.668103 48.131202 407.611118 51.139402 421.649386-21.057401 2.506833-90.246004 8.523234-95.761037 10.027333-4.5123-26.071068-81.72277-403.098818-81.722771-419.643919m343.436183-207.565809c5.515034 1.5041 54.648969-5.013667 55.150335-1.5041 1.002733 12.032801 6.0164 157.42914 0.501367 157.930507s-44.621635 4.010934-44.621635 4.010934c-1.002733-20.054668-12.032801-146.90044-11.030067-160.437341m75.70637-4.010933l4.010933 160.938707c10.5287 0 52.643502 2.506833 57.155803 2.005467-1.002733-61.668103 0-158.933241 0-158.933241-20.054668-3.509567-40.610702-5.013667-61.166736-4.010933m-64.676303 216.089043s94.758304-12.534167 126.845772 2.506833c7.019134 72.196803 6.0164 408.613852 7.019134 422.652119-21.558768 0-90.246004 1.002733-95.761038 2.005467-1.002733-26.071068-39.607968-410.619319-38.103868-427.164419m-220.099977-413.627519c54.648969 278.759879 96.262404 755.058234 97.766504 785.641602 0 0 43.117535 1.002733 91.750105 4.010934C2105.740095 614.383415 2070.644427 134.575493 2071.145794 119.033126c-12.032801-13.536901-126.344406 6.0164-126.344406 6.0164m-120.328005 659.297196c-10.5287-78.213204-290.291313-166.955108-447.720454-138.377206 0 0-19.553301-172.470141-27.073801-339.425248-6.517767-143.390873-1.002733-282.770813 0.501366-305.833681-10.5287-7.5205-123.837572 46.627102-185.004308 69.188603 0 0 73.199537 309.844614 126.344406 952.59671 0 0 84.730971 9.0246 230.12731-19.051934s317.365114-115.815705 302.825481-219.097244m-341.932083 140.88404l-24.566967-176.982441c6.0164-3.0082 156.927774 53.144869 172.971507 63.172203-2.506833 11.030067-148.40454 113.810238-148.40454 113.810238M610.664628 322.588002c6.0164 1.002733 53.144869-9.525967 55.150335-6.016401 3.0082 4.5123 24.065601 155.92504 18.550568 156.927774s-44.621635 10.027334-44.621635 10.027334c-3.0082-20.556034-28.577901-147.903173-29.079268-160.938707m75.205003-14.539634l20.556034 162.944174c10.5287-0.501367 53.144869-3.509567 57.155803-4.010934-6.517767-61.668103-16.545101-158.933241-16.545101-158.93324-20.054668-4.010934-41.112069-4.010934-61.166736 0m-40.610702 226.116376s92.752838-23.564234 126.344406-12.0328c17.046467 61.668103 48.131202 407.611118 51.139402 421.649386-21.057401 2.506833-90.246004 8.523234-95.761037 10.027333-4.5123-26.071068-81.72277-403.098818-81.722771-419.643919m343.436182-207.565809c5.515034 1.5041 54.648969-5.013667 55.150336-1.5041 1.002733 12.032801 6.0164 157.42914 0.501367 157.930507s-44.621635 4.010934-44.621635 4.010934c-1.002733-20.054668-11.531434-146.90044-11.030068-160.437341m75.706371-4.010933l4.010933 160.938707c10.5287 0 52.643502 2.506833 57.155803 2.005467-1.002733-61.668103 0-158.933241 0-158.933241-20.054668-3.509567-40.610702-4.5123-61.166736-4.010933m-64.676303 216.089043s94.758304-12.534167 126.845772 2.506833c7.019134 72.196803 6.0164 408.613852 7.019134 422.652119-21.558768 0-90.246004 1.002733-95.761038 2.005467-0.501367-26.071068-39.607968-410.619319-38.103868-427.164419m-220.099977-413.627519c54.648969 278.759879 96.262404 755.058234 97.766504 785.641602 0 0 43.117535 1.002733 91.750105 4.010934-28.577901-300.318647-63.67357-780.126569-63.172203-796.170303-12.032801-13.035534-126.344406 6.517767-126.344406 6.517767m-120.328005 659.297196c-10.5287-78.213204-290.291313-166.955108-447.720454-138.377206 0 0-19.553301-172.470141-27.073801-339.425248-6.517767-143.390873-1.002733-282.770813 0.501366-305.833681C174.475608-6.308547 61.166736 47.337689 0 69.89919c0 0 73.199537 309.844614 126.344406 952.59671 0 0 84.730971 9.0246 230.12731-19.051934s317.365114-115.815705 302.825481-219.097244m-341.932083 140.88404l-24.566967-176.982441c6.0164-3.0082 156.927774 53.144869 172.971507 63.172203-2.506833 11.030067-148.40454 113.810238-148.40454 113.810238"  ></path></symbol><symbol id="icon-npm" viewBox="0 0 1024 1024"><path d="M0 312.917333v341.333334h284.416v56.832H512v-56.832h512v-341.333334H0z m284.416 284.330667H227.584v-170.666667H170.624v170.666667H56.96V369.792h227.456v227.456z m170.666667 0v57.002667H341.376V369.792h227.584v227.498667h-113.877333v-0.042667z m512.042666 0h-56.746666v-170.666667h-57.002667v170.666667h-56.96v-170.666667h-56.746667v170.666667h-113.962666V369.792h341.418666v227.456z" fill="" ></path><path d="M455.04 426.666667H512v113.792h-56.96V426.666667z" fill="" ></path></symbol><symbol id="icon-juejin-logo" viewBox="0 0 1212 1024"><path d="M600.737684 204.341895L512.458105 134.736842l-92.213894 72.730947-4.796632 3.853474 97.010526 77.338948 97.333895-77.338948-9.054316-6.979368z m334.551579 269.958737l-423.073684 333.608421-422.804211-333.41979L26.947368 524.665263l485.268211 382.625684 485.537684-382.841263-62.464-50.149052z m-423.073684 27.055157l-230.238316-181.517473-62.437052 50.149052 292.648421 230.777264 292.944842-230.992843-62.437053-50.149052-230.480842 181.733052z"  ></path></symbol><symbol id="icon-bilibili-line" viewBox="0 0 1024 1024"><path d="M306.005333 117.632L444.330667 256h135.296l138.368-138.325333a42.666667 42.666667 0 0 1 60.373333 60.373333L700.330667 256H789.333333A149.333333 149.333333 0 0 1 938.666667 405.333333v341.333334a149.333333 149.333333 0 0 1-149.333334 149.333333h-554.666666A149.333333 149.333333 0 0 1 85.333333 746.666667v-341.333334A149.333333 149.333333 0 0 1 234.666667 256h88.96L245.632 177.962667a42.666667 42.666667 0 0 1 60.373333-60.373334zM789.333333 341.333333h-554.666666a64 64 0 0 0-63.701334 57.856L170.666667 405.333333v341.333334a64 64 0 0 0 57.856 63.701333L234.666667 810.666667h554.666666a64 64 0 0 0 63.701334-57.856L853.333333 746.666667v-341.333334A64 64 0 0 0 789.333333 341.333333zM341.333333 469.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666666-42.666667z m341.333334 0a42.666667 42.666667 0 0 1 42.666666 42.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667z"  ></path></symbol><symbol id="icon-gethub" viewBox="0 0 1024 1024"><path d="M511.028075 1022.056149A511.028075 511.028075 0 1 0 0.153462 510.874613a511.079229 511.079229 0 0 0 511.028075 511.028075" fill="#A1A1A1" ></path><path d="M795.137177 518.343091a285.89949 285.89949 0 0 1-54.274354 170.496154 278.891398 278.891398 0 0 1-139.548006 104.814467 16.676191 16.676191 0 0 1-14.578879-2.660006 14.988111 14.988111 0 0 1-4.450395-11.407334v-79.442102a68.750924 68.750924 0 0 0-19.438505-53.762813 254.490958 254.490958 0 0 0 37.649315-6.650015 135.762614 135.762614 0 0 0 34.631232-14.885803 105.377161 105.377161 0 0 0 29.771606-24.860825 119.137576 119.137576 0 0 0 20.461584-39.797782 194.385053 194.385053 0 0 0 7.724248-56.934359 110.697173 110.697173 0 0 0-29.362373-77.702868 102.307923 102.307923 0 0 0-2.864622-77.037866 47.215106 47.215106 0 0 0-29.771606 4.143471 185.075032 185.075032 0 0 0-34.017384 16.573884l-13.760416 8.900789a257.918274 257.918274 0 0 0-141.798781 0c-4.041163-2.915776-9.105405-6.036167-15.346188-10.230792a201.751224 201.751224 0 0 0-31.561994-15.346189 51.614347 51.614347 0 0 0-31.817765-5.115396 103.68908 103.68908 0 0 0-2.608852 77.702867 113.868718 113.868718 0 0 0-29.157758 78.1121 190.139275 190.139275 0 0 0 7.673095 56.269357 128.396443 128.396443 0 0 0 20.461584 39.797782 96.834449 96.834449 0 0 0 29.771606 25.270057 167.2223 167.2223 0 0 0 34.631232 14.885803 257.150964 257.150964 0 0 0 37.853931 6.650015 60.463982 60.463982 0 0 0-18.21081 38.928165 61.07783 61.07783 0 0 1-16.829653 5.422319 103.126386 103.126386 0 0 1-20.461585 1.841543 43.173943 43.173943 0 0 1-25.935058-8.491558 70.029773 70.029773 0 0 1-20.461585-23.63313 61.998601 61.998601 0 0 0-17.852733-19.643121 51.153961 51.153961 0 0 0-18.21081-9.156559h-7.519632a25.576981 25.576981 0 0 0-10.691178 1.688081c-2.046158 1.227695-2.660006 2.71116-1.841543 4.348086a29.208912 29.208912 0 0 0 3.427316 5.115397 38.774703 38.774703 0 0 0 4.859626 4.757318l2.660006 1.688081a49.772804 49.772804 0 0 1 16.215806 14.271955 100.108303 100.108303 0 0 1 11.509641 19.080428l3.631931 8.696173a46.908183 46.908183 0 0 0 16.215806 23.37736 59.952443 59.952443 0 0 0 24.502748 11.305026 122.769507 122.769507 0 0 0 25.57698 2.71116 111.873714 111.873714 0 0 0 20.461585-1.483465l8.491558-1.432311v54.274353a14.988111 14.988111 0 0 1-5.115397 11.407334 17.290039 17.290039 0 0 1-14.783494 2.660006 277.970626 277.970626 0 0 1-138.729544-105.428315 281.346788 281.346788 0 0 1-54.274353-169.882306 288.406035 288.406035 0 0 1 38.109701-145.174942A284.057948 284.057948 0 0 1 369.843141 267.279448a277.612549 277.612549 0 0 1 283.546408 0 283.95564 283.95564 0 0 1 103.842542 106.093317 287.894495 287.894495 0 0 1 38.058547 144.970326z" fill="#FFFFFF" ></path></symbol><symbol id="icon-logo" viewBox="0 0 1067 1024"><path d="M363.453722 1005.856311c-68.349515-23.363107-135.787702-64.787055-187.401942-115.241424-25.434304-24.771521-42.832362-44.90356-61.224596-70.586408-47.886084-67.189644-79.285437-146.806472-89.475728-226.83754-3.976699-31.233657-5.053722-74.977346-2.568284-105.796764 10.438835-128.911327 69.509385-247.71521 166.689967-334.954046 74.645955-67.106796 167.76699-110.767638 267.43301-125.514563 28.333981-4.142395 39.932686-4.888026 75.805825-4.970873 35.04466 0 45.483495 0.662783 73.320388 4.639482 75.640129 10.853074 146.972168 37.861489 210.433657 79.865372 59.07055 39.021359 110.68479 91.215534 148.214887 149.954692 39.352751 61.555987 64.704207 129.739806 74.563107 200.49191 3.728155 27.091262 4.225243 35.4589 4.225243 72.07767 0 36.453074-0.662783 46.560518-4.639483 73.320388-23.031715 153.931392-116.898382 289.139159-254.343042 366.436246-24.357282 13.752751-55.508091 27.754045-80.196763 36.204531-12.261489 4.142395-13.00712 4.308091-19.883496 3.976699-11.847249-0.579935-18.392233-4.72233-23.114563-14.746926-1.325566-2.651133-1.408414-10.107443-1.408414-84.919094 0-89.641424 0.082848-87.984466-4.970874-107.12233-4.970874-18.723625-14.829773-36.867314-25.6-47.306149-3.313916-3.231068-3.14822-4.225243 0.579936-4.225242 4.308091 0 24.771521-3.14822 40.512621-6.29644 72.657605-14.249838 122.780583-45.152104 153.268608-94.446602 17.977994-29.079612 28.665372-63.627184 33.470551-108.033657 2.071197-18.392233 2.071197-55.673786 0.082847-69.177994-5.550809-37.695793-20.629126-71.829126-43.992233-99.417476-3.479612-4.059547-6.29644-7.787702-6.29644-8.201941s0.994175-3.56246 2.154046-6.959224c7.207767-21.043366 9.44466-50.951456 5.633657-77.214239-2.236893-15.575405-10.770227-46.394822-13.587055-49.211651-0.579935-0.579935-5.219417-0.911327-12.261489-0.911326-13.421359 0.082848-23.777346 1.98835-40.346926 7.45631-23.860194 7.87055-54.76246 23.363107-79.782524 40.015534-8.28479 5.550809-7.290615 5.385113-17.72945 2.651133-72.574757-18.723625-161.47055-18.972168-234.625242-0.497087l-11.515858 2.899676-11.681553-7.290615c-37.695793-23.694498-68.266667-37.447249-96.186408-43.246602-10.190291-2.154045-30.985113-2.816828-32.724919-1.077023-1.408414 1.408414-7.207767 18.972168-9.941748 30.322331-7.953398 32.642071-7.207767 69.343689 1.98835 96.103559 1.159871 3.396764 2.154045 6.544984 2.154045 6.959224s-2.816828 4.142395-6.29644 8.201941c-24.02589 28.416828-39.104207 63.130097-44.406473 102.317153-1.57411 11.598706-1.325566 50.951456 0.497088 67.106796 8.533333 77.297087 36.867314 129.57411 88.97864 164.370226 32.642071 21.706149 79.119741 36.867314 133.716505 43.577994l8.119094 0.994175-4.970874 5.302265c-13.172816 14.16699-21.540453 32.227832-26.511327 57.744984-1.077023 5.385113-0.911327 5.219417-14.084142 9.776051-49.128803 16.983819-92.5411 7.124919-121.620712-27.671197-3.14822-3.728155-9.361812-12.344337-13.752751-19.055016-17.398058-26.511327-39.021359-43.660841-63.130097-49.957282-18.972168-4.970874-38.441424-1.491262-38.441424 6.959224 0 5.550809 6.627832 12.344337 21.871845 22.534627 14.58123 9.693204 25.268608 20.794822 36.535922 38.027185 5.550809 8.450485 13.587055 23.860194 17.066667 32.559223 5.219417 13.421359 12.427184 23.860194 23.860194 34.878965 18.226537 17.563754 42.500971 28.333981 72.574757 32.062136 17.398058 2.236893 50.040129 0.497087 69.923625-3.728156 3.396764-0.662783 6.213592-1.159871 6.379288-0.994175s0.414239 22.948867 0.497087 50.702913l0.248544 50.537217-1.988349 4.059547c-4.556634 9.113269-11.184466 13.089968-22.86602 13.504207-6.959223 0.331392-8.119094 0.082848-17.232362-2.982524z"  ></path><path d="M346.304207 854.327508c-1.57411-0.745631-3.396764-2.402589-4.142395-3.645307-1.077023-2.071197-1.077023-2.568285 0-4.556635 3.811003-6.876375 17.72945-6.793528 20.794822 0.082848 2.071197 4.473786-3.56246 9.610356-10.438835 9.610356-1.822654 0-4.639482-0.662783-6.213592-1.491262zM384.414239 849.770874c-1.159871-0.579935-2.568285-2.071197-3.14822-3.313916-0.994175-1.98835-0.911327-2.651133 0.41424-4.888026 2.319741-3.976699 6.379288-5.799353 12.178641-5.385113 4.059547 0.248544 5.219417 0.662783 6.876375 2.568285 0.994175 1.242718 1.905502 2.899676 1.905502 3.728155 0 2.071197-2.982524 5.633657-5.799353 7.124919-2.899676 1.491262-9.610356 1.57411-12.427185 0.165696zM307.945631 848.859547c-3.811003-1.408414-5.302265-2.651133-6.876375-5.716505-2.733981-5.219417 1.905502-9.44466 9.610356-8.699029 9.776052 0.994175 14.829773 11.184466 7.042071 14.415534-3.479612 1.408414-5.716505 1.408414-9.776052 0zM275.469256 829.638835c-8.036246-2.733981-12.344337-12.095793-7.373463-15.989644 2.816828-2.154045 4.72233-2.154045 9.196116 0 3.893851 1.905502 7.704854 7.207767 7.704855 10.770226 0 4.805178-4.142395 7.124919-9.527508 5.219418zM246.1411 797.908091c-5.302265-5.302265-5.467961-12.261489-0.497087-14.166991 4.142395-1.57411 9.113269 1.739806 11.598705 7.787703 2.319741 5.385113 0.082848 9.610356-5.053721 9.610356-2.154045 0-3.56246-0.745631-6.047897-3.231068zM229.737217 771.976699c-4.888026-1.325566-8.781877-7.87055-7.042071-11.847249 2.899676-6.29644 14.249838-0.248544 14.249838 7.539158 0 3.893851-2.733981 5.550809-7.207767 4.308091zM205.794175 749.773463c-1.98835-0.828479-5.302265-4.72233-5.302266-6.29644 0-3.976699 7.456311-4.970874 11.515858-1.491262 5.716505 4.805178 0.911327 10.687379-6.213592 7.787702z"  ></path></symbol></svg>',
    a = (a = document.getElementsByTagName('script'))[
      a.length - 1
    ].getAttribute('data-injectcss'),
    s = function (t, e) {
      e.parentNode.insertBefore(t, e)
    }
  if (a && !t.__iconfont__svg__cssinject__) {
    t.__iconfont__svg__cssinject__ = !0
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      )
    } catch (t) {
      console && console.log(t)
    }
  }
  function m() {
    n || ((n = !0), o())
  }
  function d() {
    try {
      i.documentElement.doScroll('left')
    } catch (t) {
      return void setTimeout(d, 50)
    }
    m()
  }
  (e = function () {
    var t,
      e = document.createElement('div')
    ;(e.innerHTML = l),
      (l = null),
      (e = e.getElementsByTagName('svg')[0]) &&
        (e.setAttribute('aria-hidden', 'true'),
        (e.style.position = 'absolute'),
        (e.style.width = 0),
        (e.style.height = 0),
        (e.style.overflow = 'hidden'),
        (t = document.body).firstChild ? s(e, t.firstChild) : t.appendChild(e))
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(e, 0)
        : ((c = function () {
            document.removeEventListener('DOMContentLoaded', c, !1), e()
          }),
          document.addEventListener('DOMContentLoaded', c, !1))
      : document.attachEvent &&
        ((o = e),
        (i = t.document),
        (n = !1),
        d(),
        (i.onreadystatechange = function () {
          'complete' == i.readyState && ((i.onreadystatechange = null), m())
        }))
})(window)