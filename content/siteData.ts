export const practitioner = {
  name: "Sylwia Matijuk",
  titles_pl: ["Psycholog", "Psychoterapeuta", "Pedagog"],
  titles_en: ["Psychologist", "Psychotherapist", "Educator"],
  experience_years: 23,
  email: "sylviamatijuk@gmail.com",
  phone: "+353 89 472 5374",
  phone_raw: "+353894725374",
  address: "42–43 Prussia Street, Dublin 7",
  address_maps_url: "https://maps.google.com/?q=42+Prussia+Street+Dublin+7",
  hours_pl: "Pon.–Pt. 9:00–19:00, Sob. po uzgodnieniu",
  hours_en: "Mon–Fri 9:00–19:00, Sat by arrangement",
  pricing_pl: "€80–€120 / sesja",
  pricing_en: "€80–€120 / session",
  education: [
    {
      institution_pl: "Uniwersytet SWPS, Warszawa",
      institution_en: "SWPS University, Warsaw",
      degree_pl: "Psychologia, studia magisterskie",
      degree_en: "MA Psychology",
    },
    {
      institution_pl: "Krakowskie Centrum Psychodynamiczne (KCP), Kraków",
      institution_en: "Kraków Psychodynamic Centre (KCP), Kraków",
      degree_pl: "Psychoterapia dorosłych — pięcioletnia szkoła psychoterapii",
      degree_en: "Adult Psychotherapy — Five-year Psychotherapy School",
    },
    {
      institution_pl: "Krakowskie Centrum Psychodynamiczne (KCP), Kraków",
      institution_en: "Kraków Psychodynamic Centre (KCP), Kraków",
      degree_pl: "Psychoterapia dzieci i młodzieży — dwuletnia szkoła psychoterapii",
      degree_en: "Child & Adolescent Psychotherapy — Two-year Psychotherapy School",
    },
    {
      institution_pl: "Uniwersytet Szczeciński, Szczecin",
      institution_en: "University of Szczecin, Szczecin",
      degree_pl: "Pedagogika opiekuńczo-wychowawcza, studia magisterskie",
      degree_en: "MA Social Pedagogy",
    },
  ],
};

export const services = [
  {
    id: "individual-psychotherapy",
    name_pl: "Psychoterapia indywidualna dzieci, młodzieży i dorosłych",
    name_en: "Individual psychotherapy for children, adolescents and adults",
    desc_pl:
      "Indywidualna psychoterapia psychodynamiczna dla dorosłych, młodzieży i dzieci. Pracujemy w tempie dostosowanym do Ciebie, w atmosferze bezpieczeństwa i zaufania.",
    desc_en:
      "Individual psychodynamic psychotherapy for adults, adolescents and children. We work at your pace, in an atmosphere of safety and trust.",
    format_pl: "Stacjonarnie i online",
    format_en: "In-person and online",
    icon: "User",
  },
  {
    id: "couples",
    name_pl: "Psychoterapia par",
    name_en: "Couples therapy",
    desc_pl:
      "Terapia par pomaga zrozumieć wzorce relacji, poprawić komunikację i odbudować bliskość. Pracujemy razem nad tym, co Was łączy i co sprawia trudność.",
    desc_en:
      "Couples therapy helps understand relationship patterns, improve communication, and rebuild closeness.",
    format_pl: "Stacjonarnie i online",
    format_en: "In-person and online",
    icon: "Heart",
  },
  {
    id: "group-psychotherapy",
    name_pl: "Psychoterapia grupowa",
    name_en: "Group psychotherapy",
    desc_pl:
      "Praca w grupie oferuje unikalną przestrzeń do poznania siebie poprzez relacje z innymi. Grupy terapeutyczne prowadzone w języku polskim.",
    desc_en:
      "Group work offers a unique space for self-discovery through relationships with others. Therapeutic groups conducted in Polish.",
    format_pl: "Stacjonarnie",
    format_en: "In-person",
    icon: "Users",
  },
  {
    id: "family-therapy",
    name_pl: "Psychoterapia rodzin",
    name_en: "Family therapy",
    desc_pl:
      "Terapia rodzinna pomaga rodzinom przejść przez trudne okresy, poprawić relacje i zrozumieć dynamikę, która kształtuje życie domowe.",
    desc_en:
      "Family therapy helps families navigate difficult periods, improve relationships and understand the dynamics shaping home life.",
    format_pl: "Stacjonarnie i online",
    format_en: "In-person and online",
    icon: "Home",
  },
  {
    id: "addiction-psychotherapy",
    name_pl: "Psychoterapia uzależnień",
    name_en: "Addiction psychotherapy",
    desc_pl:
      "Specjalistyczna pomoc dla osób zmagających się z uzależnieniami. Pracujemy nad zrozumieniem korzeni uzależnienia i budowaniem trwałej zmiany.",
    desc_en:
      "Specialist support for those struggling with addiction. We work on understanding the roots of addiction and building lasting change.",
    format_pl: "Stacjonarnie i online",
    format_en: "In-person and online",
    icon: "Shield",
  },
  {
    id: "codependency",
    name_pl: "Psychoterapia dla osób współuzależnionych i dorosłych dzieci z domów alkoholowych i dysfunkcyjnych",
    name_en: "Therapy for co-dependents and adult children of alcoholic / dysfunctional families",
    desc_pl:
      "Terapia dla osób, które dorastały w domach z problemem alkoholowym lub innymi dysfunkcjami. Przestrzeń do przepracowania trudnych doświadczeń z przeszłości.",
    desc_en:
      "Therapy for those who grew up in homes with alcohol problems or other dysfunctions. Space to work through difficult past experiences.",
    format_pl: "Stacjonarnie i online",
    format_en: "In-person and online",
    icon: "Layers",
  },
  {
    id: "diagnosis",
    name_pl: "Diagnoza psychologiczna",
    name_en: "Psychological diagnosis / assessment",
    desc_pl:
      "Profesjonalna diagnoza psychologiczna dla dzieci, młodzieży i dorosłych. Badanie dostosowane do potrzeb i wieku pacjenta.",
    desc_en:
      "Professional psychological assessment for children, adolescents and adults. Evaluation tailored to the patient's needs and age.",
    format_pl: "Stacjonarnie",
    format_en: "In-person",
    icon: "ClipboardList",
  },
  {
    id: "counselling",
    name_pl: "Poradnictwo psychologiczne",
    name_en: "Psychological counselling",
    desc_pl:
      "Krótkoterminowe wsparcie psychologiczne skoncentrowane na konkretnym problemie lub trudnej sytuacji życiowej.",
    desc_en:
      "Short-term psychological support focused on a specific problem or difficult life situation.",
    format_pl: "Stacjonarnie i online",
    format_en: "In-person and online",
    icon: "MessageCircle",
  },
  {
    id: "online-sessions",
    name_pl: "Sesje online",
    name_en: "Online sessions",
    desc_pl:
      "Pełne sesje terapeutyczne prowadzone przez internet — dla osób mieszkających poza Dublinem lub preferujących tę formę pracy.",
    desc_en:
      "Full therapeutic sessions conducted online — for those living outside Dublin or who prefer this format.",
    format_pl: "Online",
    format_en: "Online",
    icon: "Video",
  },
];

// TODO_CLIENT: Replace with real testimonials when provided
export const testimonials = [
  {
    id: "t1",
    quote_pl:
      "Dzięki terapii z Panią Sylwią zrozumiałam wzorce, które przez lata nieświadomie powtarzałam. To była dla mnie prawdziwa zmiana.",
    quote_en:
      "Through therapy with Sylwia I understood patterns I had been unconsciously repeating for years. It was a genuine turning point for me.",
    name_initial: "A.K.",
    role_pl: "pacjentka",
    role_en: "patient",
    is_placeholder: true,
  },
  {
    id: "t2",
    quote_pl:
      "Bardzo doceniam profesjonalizm i ciepłe podejście. Czułem się wysłuchany od pierwszej sesji.",
    quote_en:
      "I greatly appreciate the professionalism and warm approach. I felt heard from the very first session.",
    name_initial: "M.W.",
    role_pl: "pacjent",
    role_en: "patient",
    is_placeholder: true,
  },
  {
    id: "t3",
    quote_pl:
      "Terapia par pomogła nam odbudować zaufanie i nauczyć się rozmawiać. Polecamy każdej parze w trudnym momencie.",
    quote_en:
      "Couples therapy helped us rebuild trust and learn to communicate. We recommend it to any couple going through a difficult time.",
    name_initial: "K. i P.",
    role_pl: "pacjenci (terapia par)",
    role_en: "patients (couples therapy)",
    is_placeholder: true,
  },
];

// TODO_CLIENT: Replace with real article slugs and summaries when content is ready
export const resources = [
  {
    id: "r1",
    title_pl: "Czym jest psychoterapia psychodynamiczna?",
    title_en: "What is psychodynamic psychotherapy?",
    summary_pl:
      "Podejście psychodynamiczne zakłada, że nasze obecne trudności mają korzenie w przeszłości. Dowiedz się, na czym polega ta forma terapii.",
    summary_en:
      "The psychodynamic approach assumes that our current difficulties have roots in the past. Learn what this form of therapy involves.",
    slug: "czym-jest-psychoterapia-psychodynamiczna",
    is_placeholder: true,
  },
  {
    id: "r2",
    title_pl: "Jak wybrać terapeutę?",
    title_en: "How to choose a therapist?",
    summary_pl:
      "Wybór terapeuty to ważna decyzja. Na co zwrócić uwagę i jak ocenić, czy dany terapeuta jest odpowiedni dla Ciebie.",
    summary_en:
      "Choosing a therapist is an important decision. What to look out for and how to assess whether a particular therapist is right for you.",
    slug: "jak-wybrac-terapeuty",
    is_placeholder: true,
  },
  {
    id: "r3",
    title_pl: "Czego spodziewać się na pierwszej sesji?",
    title_en: "What to expect at the first session?",
    summary_pl:
      "Pierwsza wizyta u terapeuty bywa stresująca. Opisujemy, jak wygląda takie spotkanie i jak się do niego przygotować.",
    summary_en:
      "The first visit to a therapist can be stressful. We describe what such a meeting looks like and how to prepare.",
    slug: "pierwsza-sesja",
    is_placeholder: true,
  },
  {
    id: "r4",
    title_pl: "Współuzależnienie — co to znaczy?",
    title_en: "Co-dependency — what does it mean?",
    summary_pl:
      "Współuzależnienie to złożony wzorzec relacyjny, który często towarzyszy życiu z osobą uzależnioną. Jak je rozpoznać i gdzie szukać pomocy.",
    summary_en:
      "Co-dependency is a complex relational pattern that often accompanies life with an addicted person. How to recognise it and where to seek help.",
    slug: "wspoluzaleznienie",
    is_placeholder: true,
  },
];
