import { create } from "zustand";


const useStore = create((set) => ({
    isDarkMode: false, // Default theme is light mode
    toggleTheme: () => set((state) => {
        const newDarkMode = !state.isDarkMode;
        // Add or remove the dark class on the html element
        if (newDarkMode) {
          document.documentElement.classList.add('dark');  // Add 'dark' class
        } else {
          document.documentElement.classList.remove('dark');  // Remove 'dark' class
        }
        return { isDarkMode: newDarkMode };
      }),
      
  }));
export default useStore;
/// this creates a global state and when toggletheme is clicked the dark  class is and removed 

const { isDarkMode } = useStore() // this will be used in other components 

// conditions based on the state
                <motion.a
                   className={`inline-block p-3 mt-8 text-black ${
                    isDarkMode ? 'my-class text-white' : 'my-class-dark '
                  } lg:p-4 rounded-2xl`}
              
                   href={HERO_CONTENT.resumeLink}
                   download
                   rel="noopener noreferrer"
                   target="_blank"
                   variants={textVariants}>
                    {HERO_CONTENT.resumeLinkText}
                </motion.a>
