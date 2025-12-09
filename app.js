const { createApp, computed } = Vue;

createApp({
    data() {
        return {
            mobileNavOpen: false,
            profile: {
                name: "Fa'iq Haidar",
                title: 'Fullstack Developer',
                summary: 'Experienced Fullstack Web Developer with 2 years of expertise in building robust web applications. Proficient in designing functional features, managing databases, and ensuring application stability and usability. Skilled in team collaboration and committed to continuous improvement in software development quality.',
                location: 'Indonesia',
                socials: [
                    { name: 'GitHub', url: 'https://github.com/faiqhaidar12', icon: 'ph-thin ph-github-logo' },
                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/faiq-haidar-763335219/', icon: 'ph-thin ph-linkedin-logo' },
                    { name: 'Email', url: 'mailto:faiqhaidar1@gmail.com', icon: 'ph-thin ph-envelope' },
                ],
                stacks: ['Laravel', 'Vue', 'Livewire', 'Tailwind', 'MySQL', 'REST API', 'Vite'],
            },
            filters: {
                search: '',
                tech: 'All',
            },
            techOptions: ['All', 'Laravel', 'Vue', 'API', 'Frontend', 'Backend'],
            projects: [
                {
                    name: 'Guruinovatif.id',
                    desc: 'Certified online learning platform for educators. Develop teaching skills through courses, webinars, and certifications.',
                    tech: ['Laravel', 'Tailwind','Livewire'],
                    link: 'https://guruinovatif.id/'
                },
                {
                    name: 'Komunitas Guru Inovatif',
                    desc: 'Community platform for innovative educators to share resources, ideas, and teaching experiences.',
                    tech: ['Laravel', 'Livewire', 'API'],
                    link: 'https://komunitas.guruinovatif.id/'
                },
                {
                    name: 'Karya Guru Inovatif',
                    desc: 'Public repository of documents, teaching modules, educational materials, articles, and learning media contributed by creators.',
                    tech: ['Laravel','Livewire','Vue'],
                    link: 'https://karya.guruinovatif.id/'
                },
                {
                    name: 'Kreator Guru Inovatif',
                    desc: 'Platform providing opportunities for anyone to contribute educational content: teaching modules, materials, articles, and event hosting.',
                    tech: ['Laravel', 'Bootstrap'],
                    link: 'https://kreator.guruinovatif.id/'
                },
            ],
        };
    },
    computed: {
        filteredProjects() {
            const term = this.filters.search.toLowerCase();
            const tech = this.filters.tech;
            return this.projects.filter(p => {
                const matchTerm = !term || (p.name.toLowerCase().includes(term) || p.desc.toLowerCase().includes(term));
                const matchTech = tech === 'All' || p.tech.includes(tech);
                return matchTerm && matchTech;
            });
        },
    },
    methods: {
        currentYear() { return new Date().getFullYear(); },
    },
    template: `
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <!-- Nav -->
        <nav class="flex items-center justify-between gap-4 flex-wrap">
            <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-400 shadow-lg"></div>
                <div>
                    <div class="font-bold tracking-tight text-white">{{ profile.name }}</div>
                    <small class="text-slate-400">{{ profile.title }}</small>
                </div>
            </div>
            <!-- Desktop links -->
            <div class="hidden sm:flex items-center gap-3 text-sm">
                <a href="#about" class="px-3 py-2 rounded-lg text-slate-300 hover:bg-white/10 hover:text-white">About</a>
                <a href="#projects" class="px-3 py-2 rounded-lg text-slate-300 hover:bg-white/10 hover:text-white">Projects</a>
                <a href="#contact" class="px-3 py-2 rounded-lg text-slate-300 hover:bg-white/10 hover:text-white">Contact</a>
            </div>
            <!-- Mobile toggle -->
            <button class="sm:hidden inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white" @click="mobileNavOpen = !mobileNavOpen" aria-label="Toggle navigation">
                <i class="ph-thin ph-list"></i>
                Menu
            </button>
            <!-- Mobile links -->
            <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 -translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-2"
            >
                <div v-if="mobileNavOpen" class="w-full sm:hidden mt-2 space-y-2">
                    <a href="#about" @click="mobileNavOpen=false" class="block px-3 py-2 rounded-lg bg-white/5 text-slate-200 hover:bg-white/10 transition">About</a>
                    <a href="#projects" @click="mobileNavOpen=false" class="block px-3 py-2 rounded-lg bg-white/5 text-slate-200 hover:bg-white/10 transition">Projects</a>
                    <a href="#contact" @click="mobileNavOpen=false" class="block px-3 py-2 rounded-lg bg-white/5 text-slate-200 hover:bg-white/10 transition">Contact</a>
                </div>
            </transition>
        </nav>

        <!-- Hero -->
        <transition appear
            enter-active-class="transition-opacity duration-500"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
        >
        <section id="about" class="mt-6 p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-violet-400/10 to-cyan-400/10">
            <h1 class="text-2xl sm:text-3xl font-bold mb-2 text-white">Hello, I'm a Fullstack Developer specializing in Laravel</h1>
            <p class="text-slate-300">{{ profile.summary }}</p>
            <div class="flex flex-wrap gap-2 mt-3">
                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm"><i class="ph-thin ph-map-pin"></i> {{ profile.location }}</span>
                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm"><i class="ph-thin ph-terminal-window"></i> Fullstack</span>
                <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm"><i class="ph-thin ph-lightning"></i> Problem Solver</span>
            </div>
        </section>
        </transition>

        <!-- Skills -->
        <h2 class="mt-7 mb-3 text-lg font-semibold text-white">Technical Skills</h2>
        <div class="rounded-xl border border-white/10 bg-white/5 p-4">
            <div class="flex flex-wrap gap-2">
                <span v-for="s in profile.stacks" :key="s" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm">{{ s }}</span>
            </div>
        </div>

        <!-- Projects -->
        <h2 id="projects" class="mt-7 mb-3 text-lg font-semibold text-white">Featured Projects</h2>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            <!-- Left: list + filters -->
            <div class="lg:col-span-7 rounded-xl border border-white/10 bg-white/5 p-4">
                <div class="flex flex-wrap gap-2 mb-3">
                    <input type="text" v-model="filters.search" placeholder="Search projects..." class="flex-1 min-w-[160px] px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none">
                    <select v-model="filters.tech" class="px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white">
                        <option v-for="opt in techOptions" :key="opt" :value="opt">{{ opt }}</option>
                    </select>
                    <button class="px-3 py-2 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-400 text-slate-900 font-semibold transition hover:brightness-110" @click="filters.search=''; filters.tech='All'">Reset</button>
                </div>

                <transition-group tag="div"
                    enter-active-class="transition duration-300 ease-out"
                    enter-from-class="opacity-0 -translate-y-1"
                    enter-to-class="opacity-100 translate-y-0"
                    leave-active-class="transition duration-200 ease-in"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 -translate-y-1"
                    move-class="transition-transform"
                >
                    <div v-for="p in filteredProjects" :key="p.name" class="border-t border-white/10 pt-3 mt-3 first:border-t-0 first:pt-0 first:mt-0 rounded-lg -mx-2 px-2 hover:bg-white/5 transition">
                        <div class="flex items-center justify-between">
                            <h3 class="text-base font-semibold text-white">{{ p.name }}</h3>
                        </div>
                        <p class="text-slate-300 mt-1">{{ p.desc }}</p>
                        <div class="flex flex-wrap gap-2 mt-2">
                            <span v-for="t in p.tech" :key="t" class="text-xs px-2 py-1 rounded-full bg-white/10 text-white">{{ t }}</span>
                        </div>
                    </div>
                </transition-group>
            </div>

            <!-- Right: highlight -->
            <div class="lg:col-span-5 rounded-xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-0.5">
                <h3 class="text-base font-semibold text-white">Highlights</h3>
                <p class="text-slate-300 mb-2">Key achievements and areas of focus:</p>
                <ul class="list-disc pl-5 text-slate-300 space-y-1">
                  <li>Experienced in developing and maintaining scalable web applications</li>
        <li>Strong understanding of backend logic, data flow, and system integration</li>
        <li>Database design and management for reliable data handling</li>
        <li>Focus on clean code, maintainability, and continuous improvement</li>
                </ul>
                <div class="flex flex-wrap gap-2 mt-3">
                    <a v-for="s in profile.socials" :key="s.name" :href="s.url" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm transition hover:bg-white/15">
                        <i :class="s.icon"></i> {{ s.name }}
                    </a>
                </div>
            </div>
        </div>

        <!-- Contact -->
        <section id="contact" class="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
            <h3 class="text-base font-semibold text-white">Contact</h3>
            <p class="text-slate-300">Need help building your product? Send me an email or connect via LinkedIn.</p>
            <div class="flex flex-wrap gap-2 mt-2">
                <a v-for="s in profile.socials" :key="s.name" :href="s.url" target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-sm">
                    <i :class="s.icon"></i> {{ s.name }}
                </a>
            </div>
        </section>

        <footer class="mt-8 text-center text-slate-400 text-sm">© {{ currentYear() }} — Built with Vue</footer>
    </div>
    `,
}).mount('#app');
