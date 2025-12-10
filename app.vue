<template>
    <!-- GitHub-like layout -->
    <div :class="['min-h-screen', isDark ? 'bg-[#0d1117] text-[#c9d1d9]' : 'bg-[#f6f8fa] text-[#24292f]']">
        <!-- Header -->
        <header :class="['sticky top-0 z-40 backdrop-blur border-b', isDark ? 'bg-[#0d1117]/95 border-[#30363d]' : 'bg-white/95 border-[#d0d7de]']">
            <div class="mx-auto max-w-6xl px-4 py-3 flex items-center gap-3">
                <a href="#" :class="['inline-flex items-center gap-2', isDark ? 'text-white' : 'text-[#24292f]']">
                    <svg viewBox="0 0 16 16" width="24" height="24" aria-hidden="true" :class="isDark ? 'fill-white' : 'fill-[#24292f]'"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8Z"></path></svg>
                    <span class="font-semibold">{{ profile.name }}</span>
                </a>
                <div class="ml-auto flex items-center gap-3 w-full sm:w-auto">
                    <input v-model="filters.search" type="search" placeholder="Search" :class="['w-full sm:w-64 px-3 py-1.5 rounded-md focus:outline-none focus:ring-2', isDark ? 'bg-[#0d1117] border border-[#30363d] text-[#c9d1d9] placeholder-[#8b949e] focus:ring-[#1f6feb]' : 'bg-white border border-[#d0d7de] text-[#24292f] placeholder-[#656d76] focus:ring-[#0969da]']" />
                    <button :class="['sm:hidden px-3 py-1.5 rounded-md border', isDark ? 'bg-[#21262d] border-[#30363d] text-white' : 'bg-[#f6f8fa] border-[#d0d7de] text-[#24292f]']" @click="mobileNavOpen=!mobileNavOpen">
                        <i class="ph-thin ph-list"></i>
                    </button>
                    <button :class="['px-3 py-1.5 rounded-md border', isDark ? 'bg-[#21262d] border-[#30363d] text-white hover:bg-[#30363d]' : 'bg-[#f6f8fa] border-[#d0d7de] text-[#24292f] hover:bg-white']" @click="isDark = !isDark" aria-label="Toggle theme">
                        {{ isDark ? 'Light' : 'Dark' }}
                    </button>
                </div>
            </div>
            <nav :class="['border-t', isDark ? 'border-[#30363d]' : 'border-[#d0d7de]']">
                <div class="mx-auto max-w-6xl px-4 flex items-center gap-6 text-sm overflow-x-auto">
                    <a href="#about" :class="['py-3 inline-flex items-center gap-2 border-b-2 border-transparent', isDark ? 'text-[#8b949e] hover:text-white hover:border-[#1f6feb]' : 'text-[#656d76] hover:text-[#24292f] hover:border-[#0969da]']">Overview</a>
                    <a href="#projects" :class="['py-3 inline-flex items-center gap-2 border-b-2 border-transparent', isDark ? 'text-[#8b949e] hover:text-white hover:border-[#1f6feb]' : 'text-[#656d76] hover:text-[#24292f] hover:border-[#0969da]']">Projects</a>
                    <a href="#contact" :class="['py-3 inline-flex items-center gap-2 border-b-2 border-transparent', isDark ? 'text-[#8b949e] hover:text-white hover:border-[#1f6feb]' : 'text-[#656d76] hover:text-[#24292f] hover:border-[#0969da]']">Contact</a>
                </div>
            </nav>
            <transition enter-active-class="transition duration-200" enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <div v-if="mobileNavOpen" :class="['sm:hidden border-t', isDark ? 'border-[#30363d]' : 'border-[#d0d7de]']">
                    <div class="px-4 py-2 space-y-2">
                        <a href="#about" @click="mobileNavOpen=false" :class="['block px-3 py-2 rounded-md border', isDark ? 'bg-[#21262d] border-[#30363d] text-white' : 'bg-[#f6f8fa] border-[#d0d7de] text-[#24292f]']">Overview</a>
                        <a href="#projects" @click="mobileNavOpen=false" :class="['block px-3 py-2 rounded-md border', isDark ? 'bg-[#21262d] border-[#30363d] text-white' : 'bg-[#f6f8fa] border-[#d0d7de] text-[#24292f]']">Projects</a>
                        <a href="#contact" @click="mobileNavOpen=false" :class="['block px-3 py-2 rounded-md border', isDark ? 'bg-[#21262d] border-[#30363d] text-white' : 'bg-[#f6f8fa] border-[#d0d7de] text-[#24292f]']">Contact</a>
                    </div>
                </div>
            </transition>
        </header>

        <!-- Content -->
        <main class="mx-auto max-w-6xl px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Left: Profile sidebar -->
            <aside class="md:col-span-1">
                <div :class="['rounded-lg border p-4', isDark ? 'border-[#30363d] bg-[#0d1117]' : 'border-[#d0d7de] bg-white']">
                    <div :class="['w-24 h-24 rounded-full mb-3 flex items-center justify-center font-semibold text-lg select-none', isDark ? 'bg-[#161b22] text-white border border-[#30363d]' : 'bg-[#eef2f7] text-[#24292f] border border-[#d0d7de]']">{{ initials }}</div>
                    <h1 :class="['text-xl font-semibold', isDark ? 'text-white' : 'text-[#24292f]']">{{ profile.name }}</h1>
                    <p :class="[isDark ? 'text-[#8b949e]' : 'text-[#656d76]']">{{ profile.title }}</p>
                    <p :class="['mt-3', isDark ? 'text-[#c9d1d9]' : 'text-[#24292f]']">{{ profile.summary }}</p>
                    <div :class="['mt-3 inline-flex items-center gap-2', isDark ? 'text-[#8b949e]' : 'text-[#656d76]']"><i class="ph-thin ph-map-pin"></i> {{ profile.location }}</div>
                    <div class="mt-4 flex flex-wrap gap-2">
                        <a v-for="s in profile.socials" :key="s.name" :href="s.url" target="_blank" rel="noopener" :class="['inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-sm transition', isDark ? 'bg-[#21262d] border-[#30363d] text-white hover:bg-[#30363d]' : 'bg-[#f6f8fa] border-[#d0d7de] text-[#24292f] hover:bg-white']">
                            <i :class="s.icon"></i> {{ s.name }}
                        </a>
                    </div>
                </div>
                <div :class="['mt-6 rounded-lg border p-4', isDark ? 'border-[#30363d] bg-[#0d1117]' : 'border-[#d0d7de] bg-white']">
                    <h2 :class="['font-semibold mb-2', isDark ? 'text-white' : 'text-[#24292f]']">Skills</h2>
                    <div class="flex flex-wrap gap-2">
                        <span v-for="s in profile.stacks" :key="s" :class="['px-2 py-1 text-xs rounded-md border', isDark ? 'bg-[#21262d] border-[#30363d] text-[#c9d1d9]' : 'bg-[#f6f8fa] border-[#d0d7de] text-[#24292f]']">{{ s }}</span>
                    </div>
                </div>
            </aside>

            <!-- Right: repo-like cards -->
            <section class="md:col-span-2">
                <div id="projects" :class="['rounded-lg border p-4', isDark ? 'border-[#30363d] bg-[#0d1117]' : 'border-[#d0d7de] bg-white']">
                    <div class="flex flex-wrap gap-2 mb-4">
                        <input type="text" v-model="filters.search" placeholder="Search projects" :class="['flex-1 min-w-[160px] px-3 py-1.5 rounded-md focus:outline-none focus:ring-2', isDark ? 'bg-[#0d1117] border border-[#30363d] text-[#c9d1d9] placeholder-[#8b949e] focus:ring-[#1f6feb]' : 'bg-white border border-[#d0d7de] text-[#24292f] placeholder-[#656d76] focus:ring-[#0969da]']">
                        <select v-model="filters.tech" :class="['px-3 py-1.5 rounded-md', isDark ? 'bg-[#0d1117] border border-[#30363d] text-[#c9d1d9]' : 'bg-white border border-[#d0d7de] text-[#24292f]']">
                            <option v-for="opt in techOptions" :key="opt" :value="opt">{{ opt }}</option>
                        </select>
                        <button :class="['px-3 py-1.5 rounded-md border transition', isDark ? 'bg-[#21262d] border-[#30363d] text-white hover:bg-[#30363d]' : 'bg-[#f6f8fa] border-[#d0d7de] text-[#24292f] hover:bg-white']" @click="filters.search=''; filters.tech='All'">Reset</button>
                    </div>

                    <transition-group tag="div" enter-active-class="transition duration-300" enter-from-class="opacity-0 -translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0">
                        <a v-for="p in filteredProjects" :key="p.name" :href="p.link" target="_blank" rel="noopener" :class="['block border-t py-3 first:border-t-0 group', isDark ? 'border-[#30363d]' : 'border-[#d0d7de]']">
                            <div class="flex items-center justify-between">
                                <h3 :class="['group-hover:underline font-semibold', isDark ? 'text-[#58a6ff]' : 'text-[#0969da]']">{{ p.name }}</h3>
                                <span :class="['text-xs', isDark ? 'text-[#8b949e]' : 'text-[#656d76]']">External</span>
                            </div>
                            <p :class="['mt-1', isDark ? 'text-[#c9d1d9]' : 'text-[#24292f]']">{{ p.desc }}</p>
                            <div class="flex flex-wrap gap-2 mt-2">
                                <span v-for="t in p.tech" :key="t" :class="['text-xs px-2 py-0.5 rounded-full border', isDark ? 'bg-[#21262d] border-[#30363d] text-[#8b949e]' : 'bg-[#f6f8fa] border-[#d0d7de] text-[#656d76]']">{{ t }}</span>
                            </div>
                        </a>
                    </transition-group>
                </div>

                <section id="contact" :class="['mt-6 rounded-lg border p-4', isDark ? 'border-[#30363d] bg-[#0d1117]' : 'border-[#d0d7de] bg-white']">
                    <h3 :class="['font-semibold', isDark ? 'text-white' : 'text-[#24292f]']">Contact</h3>
                    <p :class="[isDark ? 'text-[#c9d1d9]' : 'text-[#24292f]']">Need help building your product? Email or connect via LinkedIn.</p>
                    <div class="flex flex-wrap gap-2 mt-2">
                        <a v-for="s in profile.socials" :key="s.name" :href="s.url" target="_blank" rel="noopener" :class="['inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-sm transition', isDark ? 'bg-[#21262d] border-[#30363d] text-white hover:bg-[#30363d]' : 'bg-[#f6f8fa] border-[#d0d7de] text-[#24292f] hover:bg-white']">
                            <i :class="s.icon"></i> {{ s.name }}
                        </a>
                    </div>
                </section>
            </section>
        </main>

        <footer :class="['border-t py-6 text-center', isDark ? 'border-[#30363d] text-[#8b949e]' : 'border-[#d0d7de] text-[#656d76]']">© {{ currentYear() }} — Built with Vue</footer>
</template>

<script>
export default {
    data() {
        return {
            isDark: false,
            mobileNavOpen: false,
            profile: {
                name: "Fa'iq Haidar",
                title: 'Fullstack Web Developer',
                summary: 'With 2 years of experience building robust web applications, I am skilled in designing functional features, managing databases, and ensuring application stability and usability. I work well in team environments and remain committed to continuous improvement in software quality and development practices.',
                location: 'Indonesia',
                socials: [
                    { name: 'GitHub', url: 'https://github.com/faiqhaidar12', icon: 'ph-thin ph-github-logo' },
                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/faiq-haidar-763335219/', icon: 'ph-thin ph-linkedin-logo' },
                    { name: 'Email', url: 'mailto:faiqhaidar1@gmail.com', icon: 'ph-thin ph-envelope' },
                ],
                stacks: ['Laravel', 'Vue', 'Livewire', 'Tailwind', 'MySQL', 'REST API'],
            },
            filters: {
                search: '',
                tech: 'All',
            },
            techOptions: ['All', 'Laravel', 'Vue', 'API', 'Tailwind', 'Livewire', 'Bootstrap'],
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
        initials() {
            const parts = (this.profile.name || '').trim().split(/\s+/);
            return parts.slice(0, 2).map(p => p[0]?.toUpperCase() || '').join('') || 'FH';
        },
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
};
</script>
