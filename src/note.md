***مهم ***
##  تشغيل Prettier وESLint لإعادة التحقق
يمكنك أيضًا تشغيل أوامر Prettier وESLint على المشروع لضمان توافق جميع الملفات:

## npx prettier --write .
## npx eslint . --fix

# شرح ملفات التكوين في المشروع

## 1. `vite.config.ts` / `vite.config.js`
- **الغرض**: إعدادات خاصة بأداة البناء Vite. يقوم بضبط الإضافات، إعدادات الخادم، وإعدادات البناء الأخرى.
- **التفاصيل**: يحتوي على شيفرة مكتوبة بلغة TypeScript/JavaScript تُصدر دالة `defineConfig`.
- **الأهمية**: ضروري لمشاريع تعتمد على Vite لتخصيص إعدادات التطوير والبناء.

## 2. `vite.config.d.ts`
- **الغرض**: ملف تعريف بلغة TypeScript يوفر تعريفات للملف `vite.config.ts`.
- **التفاصيل**: يحتوي على تعريفات تساهم في الحفاظ على أمان الأنواع وتحسين تكملة الشيفرة في المحررات.
- **الأهمية**: اختياري ولكنه مفيد لتعزيز تكامل TypeScript.

## 3. `tsconfig.node.json`
- **الغرض**: إعدادات TypeScript مخصصة لملفات Node.js مثل `vite.config.ts`.
- **التفاصيل**: يتضمن إعدادات مثل `module` و `moduleResolution` وغيرها من الخيارات التي تناسب استخدام Node.js.
- **الأهمية**: ليس إلزامياً، ولكنه مفيد لتخصيص إعدادات TypeScript لبعض الحالات الخاصة.

## 4. `tsconfig.json`
- **الغرض**: ملف التكوين الرئيسي لـ TypeScript في المشروع.
- **التفاصيل**: يتضمن خيارات مثل `compilerOptions` و `include` و `exclude` للتحكم في كيفية تعامل TypeScript مع الشيفرة.
- **الأهمية**: ضروري لمشاريع TypeScript لتحديد كيفية معالجة المترجم للشيفرة.

## 5. `tsconfig.app.json`
- **الغرض**: إعدادات TypeScript مخصصة لتطبيق معين داخل المشروع، مثل الواجهة الأمامية.
- **التفاصيل**: يمد إعدادات `tsconfig.json` ويمكن أن يتضمن مسارات محددة أو مكتبات أو قواعد معينة.
- **الأهمية**: مفيد عند الحاجة إلى تطبيق إعدادات مختلفة لأجزاء متنوعة من المشروع (مثل واجهة الزبون وواجهة المدير).

### 6. ملف `BreakpointsProvider.tsx`

* **وصف الملف**: هذا الملف هو مزود (provider) لمعلومات النقاط المختلفة لحجم العرض (breakpoints) في التطبيق، ويستخدم لتوفير سياق يحدد حجم الشاشة الحالي ويدعم قرارات تصميمية متجاوبة.

* **وظيفته**:
  * تقديم معلومات حول حجم الشاشة الحالي (مثل `xs`, `sm`, `md`, `lg`, `xl`).
  * توفير دوال مثل `up`, `down`, `only`, و `between` للتحقق من استيفاء شروط معينة لأحجام الشاشة.
  * يمكن استخدامه لتطبيق منطق مختلف حسب حجم الشاشة، مما يساعد في تحسين التجربة عبر الأجهزة المختلفة.

* **متى نستخدمه؟**:
  * عند الحاجة إلى تصميم واجهة متجاوبة (responsive) تتغير حسب حجم شاشة المستخدم.
  * لضمان أن بعض المكونات أو المحتويات تظهر أو تختفي بناءً على حجم الشاشة.

### 7. ملف `main.tsx`
* **وصف الملف**:  الملف الرئيسي الذي يبدأ بتجسيد التطبيق باستخدام ReactDOM.createRoot. يحتوي على مكونات مهمة مثل ThemeProvider و BreakpointsProvider و RouterProvider.
* **وظيفته**:
 * توفير الإعدادات الأساسية للتطبيق، مثل السمات  (ThemeProvider) ودعم النقاط (BreakpointsProvider).
إعداد الراوتر باستخدام RouterProvider لتمكين التنقل بين الصفحات.

### 8. ملف `App.tsx`
* **وظيفته**: يعرض محتوى المكونات الفرعية (child components) التي يتم تحديدها من خلال الراوتر. يتم استبدال <Outlet /> بالمكون المطابق لمسار الراوتر الحالي.

* **متى نستخدم <Outlet />** ? 
عندما نرغب في عرض مكونات فرعية داخل مكون أساسي أو تخطيط 
(layout) مشترك بين صفحات متعددة.

## 9. colors.js file:
قمنا بتحديد الالوان الاساسيه التي نحتاجها و ردجاتها و قمنا بتصديرها 

-----------------------------------------------------
## 10. palette.js:
قمنا بتخصيص الالوان الاساسيه و تغيير القييم الى الالوان التي خصصناها ف ملف colors.js 

-----------------------------------------------------

## 11. typography.js:
 we use two types of fonts :
 - almarai , cairo ( we but cairo as defualt for whole the project if you want to use almarai in any component you can do this ---> )

 -( 
    const ExampleComponent = () => {
  return (
    <div style={{ fontFamily: fontFamily.almarai }}>
      <h1>مرحبا بك في التطبيق</h1>
      <p>هذا نص يستخدم خط Almarai.</p>
    </div>
  );
};

)

-----------------------------------------------------

## 12. shadow.js:
قمنا بتخصيص الظلال و يمكن استعماله ف اي مكون عن طريق 

import customShadows from './theme/shadows';

const ExampleComponent = () => {
  return (
    <div style={{ boxShadow: customShadows[0] }}>
      <h1>مثال على استخدام الظلال</h1>
    </div>
  );
};

-----------------------------------------------------
##### مجلد ال theme #####

1. MuiStack (مكون Stack)
الوصف: Stack هو مكون يستخدم لتنظيم العناصر عموديًا أو أفقيًا باستخدام flexbox بشكل مرن.
الاستعمال: يتم استخدامه في تصميم الصفحات لتوزيع العناصر بشكل عمودي أو أفقي داخل الحاويات. يستخدم غالبًا في التنسيق بين المكونات مثل الأزرار، أو المربعات التي تحتوي على محتوى متعدد.
2. MuiPaper (مكون Paper)
الوصف: مكون Paper هو مكون يستخدم لتطبيق خلفية بيضاء مع ظل مميز حول العناصر.
الاستعمال: يستخدم بشكل شائع لإنشاء خلفيات للمحتوى مثل النوافذ المنبثقة أو البطاقات، ويعطي مظهرًا مميزًا وجماليًا مع تأثير الظل.
3. MuiButton (مكون Button)
الوصف: مكون Button يُستخدم لإنشاء الأزرار القابلة للنقر في واجهات المستخدم.
الاستعمال: يُستخدم بشكل أساسي في جميع الحالات التي تتطلب تفاعل المستخدم مثل النماذج، أو تنفيذ الأوامر.
4. MuiButtonBase (مكون ButtonBase)
الوصف: هو مكون أساسي للأزرار في MUI، ويوفر واجهة مشتركة للمكونات التي تعتمد على الأزرار.
الاستعمال: يستخدم كأساس للأزرار التي تحتاج إلى تخصيصات إضافية أو سلوكيات مخصصة.
5. MuiIconButton (مكون IconButton)
الوصف: مكون IconButton هو مكون زر يحتوي على أيقونة بدلاً من النص.
الاستعمال: يُستخدم لإنشاء أزرار تحتوي على أيقونات، مثل الأزرار في شريط الأدوات أو الأزرار التفاعلية مع المكونات الأخرى مثل القوائم.
6. MuiToolbar (مكون Toolbar)
الوصف: مكون Toolbar يُستخدم لإنشاء شريط أدوات يحتوي على عناصر تفاعلية مثل الأزرار أو القوائم.
الاستعمال: يستخدم بشكل شائع في إنشاء شريط الأدوات العلوي للتطبيقات التي تحتوي على أزرار وقوائم أو خيارات إضافية.
7. MuiBadge (مكون Badge)
الوصف: مكون Badge يُستخدم لإظهار مؤشرات صغيرة مثل الأعداد أو التنبيهات على العناصر.
الاستعمال: يستخدم لعرض إشعارات صغيرة مثل عدد العناصر في السلة أو عدد الرسائل غير المقروءة.
8. MuiChip (مكون Chip)
الوصف: مكون Chip يُستخدم لعرض معلومات صغيرة ضمن مربع يحتوي على نص أو أيقونة.
الاستعمال: يُستخدم لعرض التصنيفات، الوسوم، أو الفئات، مثل فئات المدونات أو العناوين.
9. MuiCheckbox (مكون Checkbox)
الوصف: مكون Checkbox يُستخدم لإدخال قيمة ثنائية (صح أو خطأ).
الاستعمال: يُستخدم بشكل رئيسي في النماذج لتحديد الخيارات مثل اختيار "موافقة" أو "رفض" لشروط الاستخدام.
10. MuiFilledInput (مكون FilledInput)
الوصف: مكون FilledInput يُستخدم لإنشاء حقول الإدخال مع خلفية ملونة.
الاستعمال: يُستخدم في نماذج الإدخال حيث يحتاج المستخدم إلى إدخال بيانات مثل الاسم أو البريد الإلكتروني.
11. MuiFormControlLabel (مكون FormControlLabel)
الوصف: مكون FormControlLabel يُستخدم لربط التسمية بحقل إدخال مثل الاختيارات أو الأزرار.
الاستعمال: يستخدم عادة في النماذج التي تحتوي على خيارات محددة مثل الـ Checkbox أو RadioButton.
12. MuiInputAdornment (مكون InputAdornment)
الوصف: مكون InputAdornment يُستخدم لإضافة عناصر جانبية (مثل الأيقونات أو النصوص) إلى حقل الإدخال.
الاستعمال: يستخدم لإضافة أيقونات مثل "إظهار/إخفاء كلمة المرور" إلى حقول الإدخال.
13. MuiInputBase (مكون InputBase)
الوصف: مكون InputBase يُستخدم لإنشاء حقل إدخال بسيط بدون أي تحسينات إضافية.
الاستعمال: يُستخدم في حالات إدخال النصوص البسيطة.
14. MuiOutlinedInput (مكون OutlinedInput)
الوصف: مكون OutlinedInput يُستخدم لإنشاء حقول إدخال بنمط الإطار الخارجي (bordered).
الاستعمال: يُستخدم في النماذج التي تتطلب إدخال بيانات مع تأكيد مرئي بوجود الإطار حول حقل الإدخال.
15. MuiSelect (مكون Select)
الوصف: مكون Select يُستخدم لإنشاء قوائم منسدلة لاختيار الخيارات.
الاستعمال: يُستخدم بشكل شائع لاختيار قيم من قائمة، مثل تحديد المدينة أو الفئة في نموذج.
16. MuiCollapse (مكون Collapse)
الوصف: مكون Collapse يُستخدم لإخفاء أو إظهار محتوى بطريقة تفاعلية.
الاستعمال: يُستخدم في القوائم أو الأقسام القابلة للطي.
17. MuiList (مكون List)
الوصف: مكون List يُستخدم لعرض مجموعة من العناصر.
الاستعمال: يُستخدم لعرض عناصر متعددة في قائمة، مثل قائمة الخيارات أو العناصر.
18. MuiListItemButton (مكون ListItemButton)
الوصف: مكون ListItemButton يُستخدم لعرض عنصر قابل للنقر داخل قائمة.
الاستعمال: يُستخدم في إنشاء عناصر في القوائم التي يمكن النقر عليها، مثل عناصر القائمة الجانبية.
19. MuiListItemIcon (مكون ListItemIcon)
الوصف: مكون ListItemIcon يُستخدم لإضافة أيقونات إلى عناصر القائمة.
الاستعمال: يُستخدم لإضافة أيقونات بجانب النصوص داخل العناصر في القوائم.
20. MuiListItemText (مكون ListItemText)
الوصف: مكون ListItemText يُستخدم لعرض النص داخل عناصر القائمة.
الاستعمال: يستخدم لعرض النص بجانب الأيقونات في عناصر القائمة.
21. MuiMenuItem (مكون MenuItem)
الوصف: مكون MenuItem يُستخدم لإنشاء عنصر من القائمة.
الاستعمال: يُستخدم لإضافة عناصر فردية إلى القوائم المنسدلة.
22. MuiAppBar (مكون AppBar)
الوصف: مكون AppBar يُستخدم لإنشاء شريط التطبيق العلوي.
الاستعمال: يستخدم لتوفير شريط يحتوي على العنوان، الأزرار، أو القوائم في الجزء العلوي من الصفحة.
23. MuiDrawer (مكون Drawer)
الوصف: مكون Drawer يُستخدم لإنشاء شريط جانبي قابل للسحب.
الاستعمال: يستخدم لعرض القوائم الجانبية أو التنقل في التطبيق.
24. MuiLink (مكون Link)
الوصف: مكون Link يُستخدم لإنشاء روابط للتنقل بين الصفحات.
الاستعمال: يُستخدم لإنشاء روابط بين الصفحات في التطبيق.
25. MuiCard (مكون Card)
الوصف: مكون Card يُستخدم لعرض محتوى في شكل بطاقة.
الاستعمال: يستخدم لعرض مجموعة من العناصر مثل النصوص والصور في شكل بطاقة.
26. MuiCardMedia (مكون CardMedia)
الوصف: مكون CardMedia يُستخدم لعرض الصور أو الفيديوهات داخل البطاقة.
الاستعمال: يُستخدم لعرض الوسائط مثل الصور في داخل البطاقة.
27. MuiCardContent (مكون CardContent)
الوصف: مكون CardContent يُستخدم لعرض المحتوى داخل البطاقة.
الاستعمال: يُستخدم لعرض النصوص أو العناصر داخل البطاقة.
28. MuiDateCalendar و MuiMonthCalendar و MuiYearCalendar
الوصف: مكونات تقويمات لعرض التواريخ بشكل شهري أو سنوي أو يومي.
الاستعمال: تُستخدم لاختيار التواريخ في تطبيقات التقويم أو النماذج الزمنية.
29. MuiPaginationItem (مكون PaginationItem)
الوصف: مكون PaginationItem يُستخدم لعرض عناصر التنقل بين الصفحات.
الاستعمال: يُستخدم في الصفحات التي تحتوي على عدد كبير من العناصر للتنقل بين الصفحات.
30. MuiDataGrid (مكون DataGrid)
الوصف: مكون DataGrid يُستخدم لعرض البيانات في جدول مع ميزات التصفية والترتيب.
الاستعمال: يُستخدم في التطبيقات التي تحتاج إلى عرض وتصفية بيانات كبيرة في جداول.
31. MuiAvatar (مكون Avatar)
الوصف: مكون Avatar يُستخدم لعرض الصور الشخصية أو الأيقونات.
الاستعمال: يُستخدم لعرض صورة المستخدم أو رمز في واجهات المستخدم.
32. MuiAvatarGroup (مكون AvatarGroup)
الوصف: مكون AvatarGroup يُستخدم لعرض مجموعة من الصور الشخصية.
الاستعمال: يُستخدم لعرض عدة صور شخصية في مجموعة.
33. MuiDivider (مكون Divider)
الوصف: مكون Divider يُستخدم لإنشاء فاصل مرئي بين العناصر.
الاستعمال: يُستخدم لفصل الأجزاء المختلفة في الواجهة بشكل واضح.
------------------------------------------------------------------


#### مجلد routes ####

1. ملف paths.js
يتم استخدام هذا الملف لتعريف المسارات الرئيسية والثابتة في المشروع. الفائدة من استخدامه هي تسهيل إدارة المسارات والتعديل عليها في مكان واحد فقط.
**الفائدة**
تحديد المسارات في مكان واحد يسهل التعديل عليها لاحقًا في حال أردت تغيير مسار ما، دون الحاجة للبحث عنه في كل أجزاء التطبيق.
يُستخدم هذا الملف لإدارة المسارات الثابتة مثل مسار الصفحة الرئيسية (root)، المسارات الخاصة بالمصادقة (تسجيل الدخول وإنشاء حساب)

2. ملف routes.js
ملف routes.js هو المسؤول عن تنظيم المسارات داخل التطبيق، ويحدد كيفية عرض الصفحات المختلفة بناءً على المسار المُدخل من قبل المستخدم. يتضمن أيضًا استخدام تقنية التحميل الكسول (Lazy Loading) لتحسين أداء التطبيق.

**الفائدة**
التنظيم: هذا الملف ينظم المسارات بحيث يتم تحديد كيف يتم عرض كل صفحة بناءً على المسار.
التصميم المشترك: يتم استخدام تصاميم مشتركة مثل MainLayout و AuthLayout لكل مجموعة من الصفحات، مما يسهل إدارة واجهة المستخدم.
التحميل الكسول: يتم تحميل الصفحات بشكل كسول لتقليل وقت تحميل التطبيق. يتم تحميل الصفحة فقط عندما يحتاج المستخدم إلى الانتقال إليها، مما يساعد في تحسين أداء التطبيق.

3. ملف sitemap.js
ملف sitemap.js يُستخدم لتنظيم الروابط التي تظهر في القائمة الجانبية (Sidebar)، ويُعرض فيه اسم القسم، الأيقونة، والمسار الخاص بكل رابط.

**الفائدة**
تنظيم القائمة الجانبية: ينظم هذا الملف كيفية عرض الروابط والأيقونات في القائمة الجانبية.
التخصيص: يمكن إضافة أي أقسام جديدة للقائمة الجانبية بسهولة من خلال إضافة كائن جديد يحتوي على اسم القسم، المسار، والأيقونة.
تعريف المسارات والأيقونات: يتم تحديد الأيقونات المناسبة لكل مسار بناءً على التصنيف أو الوظيفة التي يقدمها.
-------------------------------------------------------------------

