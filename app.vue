<template>
    <div class="min-h-screen font-sans transition-colors duration-300 text-zinc-900 dark:text-zinc-100">
        <!-- Header -->
        <header class="sticky top-0 z-40 backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800">
            <div class="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
                <a href="#" class="text-xl font-bold tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {{ profile.name.split(' ')[0] }}<span class="text-blue-600 dark:text-blue-500">.</span>
                </a>
                
                <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
                    <a href="#about" class="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">About</a>
                    <a href="#projects" class="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Projects</a>
                    <a href="#contact" class="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Contact</a>
                </nav>

                <div class="flex items-center gap-4">
                    <button @click="toggleTheme" class="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors" aria-label="Toggle theme">
                        <i v-if="isDark" class="ph-thin ph-sun text-xl"></i>
                        <i v-else class="ph-thin ph-moon text-xl"></i>
                    </button>
                    <button class="md:hidden p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors" @click="mobileNavOpen = !mobileNavOpen">
                        <i class="ph-thin ph-list text-xl"></i>
                    </button>
                </div>
            </div>
            
            <!-- Mobile Nav -->
            <transition enter-active-class="transition duration-200" enter-from-class="opacity-0 -translate-y-2" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <div v-if="mobileNavOpen" class="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-6 py-4 space-y-4 shadow-lg absolute w-full">
                    <a href="#about" @click="mobileNavOpen=false" class="block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white font-medium">About</a>
                    <a href="#projects" @click="mobileNavOpen=false" class="block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white font-medium">Projects</a>
                    <a href="#contact" @click="mobileNavOpen=false" class="block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white font-medium">Contact</a>
                </div>
            </transition>
        </header>

        <main class="mx-auto max-w-5xl px-6 py-12 md:py-24">
            <!-- Hero -->
            <section id="about" class="py-10 md:py-20 flex flex-col items-start max-w-3xl">
                <div class="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Available for work
                </div>
                <h1 class="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    Hi, I'm <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">{{ profile.name }}</span>
                </h1>
                <p class="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 font-light">
                    {{ profile.summary }}
                </p>
                
                <div class="flex flex-wrap gap-4">
                    <a href="#projects" class="px-6 py-3 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-white transition-colors">
                        View Projects
                    </a>
                    <a href="#contact" class="px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 font-medium transition-colors">
                        Contact Me
                    </a>
                </div>
            </section>

            <!-- Skills -->
            <section class="py-10 md:py-16">
                <p class="text-sm font-semibold tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-6">Tools & Technologies</p>
                <div class="flex flex-wrap gap-3">
                    <span v-for="skill in profile.stacks" :key="skill" class="px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-sm font-medium hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm">
                        {{ skill }}
                    </span>
                </div>
            </section>

            <!-- Projects -->
            <section id="projects" class="py-16 md:py-24">
                <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">Selected Work</h2>
                        <p class="text-zinc-600 dark:text-zinc-400 max-w-xl">A collection of projects I've built, focusing on real-world impact, excellent user experiences, and robust architectures.</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <a v-for="p in projects" :key="p.name" :href="p.link" target="_blank" rel="noopener" class="group block p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-blue-500/10 transition-all duration-300">
                        <div class="flex justify-between items-start mb-6">
                            <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400">
                                <i class="ph-thin ph-folder-open text-2xl"></i>
                            </div>
                            <i class="ph-thin ph-arrow-up-right text-xl text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{{ p.name }}</h3>
                        <p class="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-3">{{ p.desc }}</p>
                        <div class="flex flex-wrap gap-2 mt-auto">
                            <span v-for="t in p.tech" :key="t" class="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-medium">
                                {{ t }}
                            </span>
                        </div>
                    </a>
                </div>
            </section>

            <!-- Contact -->
            <section id="contact" class="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-800 flex flex-col items-center text-center">
                <div class="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-8">
                    <i class="ph-thin ph-paper-plane-tilt text-3xl"></i>
                </div>
                <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-6">Let's work together</h2>
                <p class="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10">
                    I'm currently looking for new opportunities. Whether you have a project to discuss or just want to say hi, my inbox is open.
                </p>
                <div class="flex flex-wrap justify-center gap-4">
                    <a :href="profile.socials.find(s => s.name === 'Email')?.url" class="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-lg shadow-blue-500/25">
                        Say Hello
                    </a>
                    <a v-for="s in profile.socials.filter(s => s.name !== 'Email')" :key="s.name" :href="s.url" target="_blank" rel="noopener" class="px-8 py-4 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 font-medium transition-colors flex items-center gap-2">
                        <i :class="s.icon" class="text-lg"></i> {{ s.name }}
                    </a>
                </div>
            </section>
        </main>

        <footer class="border-t border-zinc-200 dark:border-zinc-800 py-10 text-center text-zinc-500 dark:text-zinc-400 text-sm">
            <p>Designed visually, built cleanly. &copy; {{ new Date().getFullYear() }} {{ profile.name }}.</p>
        </footer>
    </div>
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
                summary: 'With 2 years of experience building robust web applications, I specialize in designing functional features, managing databases, and ensuring application stability. I craft elegant and high-performing digital experiences.',
                location: 'Indonesia',
                socials: [
                    { name: 'GitHub', url: 'https://github.com/faiqhaidar12', icon: 'ph-thin ph-github-logo' },
                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/faiq-haidar-763335219/', icon: 'ph-thin ph-linkedin-logo' },
                    { name: 'Email', url: 'mailto:faiqhaidar1@gmail.com', icon: 'ph-thin ph-envelope' },
                ],
                stacks: ['Laravel', 'Vue.js', 'Livewire', 'Tailwind CSS', 'MySQL', 'REST APIs', 'Git', 'PHP'],
            },
            projects: [
                {
                    name: 'Guruinovatif.id',
                    desc: 'A certified online learning platform for educators to develop teaching skills through targeted courses, engaging webinars, and rigorous certifications.',
                    tech: ['Laravel', 'Tailwind', 'Livewire'],
                    link: 'https://guruinovatif.id/'
                },
                {
                    name: 'Komunitas Guru Inovatif',
                    desc: 'A community-driven platform allowing innovative educators to seamlessly share resources, exchange transformative ideas, and document experiences.',
                    tech: ['Laravel', 'Livewire', 'API'],
                    link: 'https://komunitas.guruinovatif.id/'
                },
                {
                    name: 'Karya Guru Inovatif',
                    desc: 'A comprehensive public repository hosting thousands of educational documents, teaching modules, articles, and interactive learning media.',
                    tech: ['Laravel', 'Livewire', 'Vue'],
                    link: 'https://karya.guruinovatif.id/'
                },
                {
                    name: 'Kreator Guru Inovatif',
                    desc: 'An empowering creator platform providing tools for authors and educators to contribute and monetize high-quality modules, articles, and host live events.',
                    tech: ['Laravel', 'Bootstrap'],
                    link: 'https://kreator.guruinovatif.id/'
                },
            ],
        };
    },
    methods: {
        toggleTheme() {
            this.isDark = !this.isDark;
            this.applyTheme();
            localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
        },
        applyTheme() {
            if (this.isDark) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    },
    mounted() {
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            this.isDark = true;
        } else {
            this.isDark = false;
        }
        this.applyTheme();
        
        // Add scroll behavior to close mobile nav
        window.addEventListener('scroll', () => {
            if (this.mobileNavOpen) {
                this.mobileNavOpen = false;
            }
        });
    }
};
</script>
