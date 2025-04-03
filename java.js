document.addEventListener('DOMContentLoaded', function() {
    const songs = [
            { title: "Heaven (Classic Version) – Bryan Adams", url: "https://youtu.be/vf3zFvcKQkw", description: "Šo dziesmu es nesen atradu, un kad to pirmo reizi klausijos, tā atgādināja siltās vasaras dienas jaunā bērnībā." },
            { title: "Shut Up and Dance – WALK THE MOON", url: "https://www.youtube.com/watch?v=6JCLY0Rlx6Q", description: "Šī dziesma vienmēr jebkurā mirklī uzlabo garastāvokli un brīžiem gribas pie tās dejot" },
            { title: "Ezers kluss – Edvards Strazdiņš", url: "https://youtu.be/txXH0L9JtMw", description: "Šī ir vairāk kā sirds miera dziesma, šī dziesma izraisa mieru sirdī man" },
            { title: "Vālodzīte – Žoržs Siksna", url: "https://youtu.be/rkc0hBcYaeI?si=vevw1A4YEoZjhhjj", description: "Šī dziesma, Manam vectēvam, tētim, tēva brālim, man un manam brālim šī dzisma patīk, to varētu nosaukt par tādu kā ģimenes dziesmu." },
            { title: "Man in the Mirror – Michael Jackson", url: "https://youtu.be/Z9NYDgbKsBE?si=A_zfcuvFzyseMqjL", description: "Viena no pirmajām dziesmām ko dzirdēju no Michael Jackson" },
            { title: "Losing My Religion – R.E.M.", url: "https://youtu.be/OKvCV8MFIaw?si=fkimcasAkwUrJzuu", description: "Es prasiju mammai dziesmas no viņas laikiem un viņa pateica šo, un man tā iepatikās" },
            { title: "Meitenei Kafejnīcā – Igo", url: "https://youtu.be/HM3Zb3EhMnE", description: "Pašlaik Ansamblī ņemam, bet šī dziesma man liekas dziļa un nopietna, ka klausoties es izjūtu visas emocijas ko dziedātājs dod." },
            { title: "Lose Control – Teddy Swims", url: "https://youtu.be/QvvhiIevsX8?si=a_0fvXdViW8RzkJG", description: "Vienu dienu paprasiju draudzenei viņas mīļāko dziesmu, un viņa atsūtija šo, man patīk vokāli un melodija." },
            { title: "Apsolītā zeme – Denijs Grieze", url: "https://youtu.be/dWpUNkhWIXQ", description: "Tāpat kā iepriekšējā, arī šī man dod nopietnības un pārdomu sajūtu par to, kas notiek un ir jau noticis, un ļoti daudz liela nopietnība un sapratne." },
            { title: "Zinu, ka pāries – Elizabete Gaile", url: "https://youtu.be/SPhbPIIb1UQ", description: "Un vēlviena jautra dziesma, ko dziedam ansamblī, šī arī garastāvokli uzlabo un pagaišina" }
        ];
    
        const playlist = document.getElementById('playlist');
        songs.forEach((song, index) => {
            const li = document.createElement('li');
            li.className = 'song';
    
            const a = document.createElement('a');
            a.href = song.url;
            a.target = "_blank";
            a.textContent = `${index + 1}. ${song.title}`;
    
            const img = document.createElement('img');
            img.src = "link-icon.png"; // Ensure you have an image named 'link-icon.png' in your project directory
    
            a.appendChild(img);
            li.appendChild(a);
    
            const description = document.createElement('div');
            description.className = 'song-description';
            description.textContent = song.description;
    
            li.appendChild(description);
            playlist.appendChild(li);
        });
    
        // Add an additional description box under the last song
        const additionalDescription = document.createElement('div');
        additionalDescription.className = 'description';
        additionalDescription.textContent = "Apkopjums par visu, mans playlist sastāv no jautrām skaistām mierīgām dziļām nopietnām spēcīgām un lustīgām dzismām, balancētas emocijas balancēta dzīve.";
    
        playlist.appendChild(additionalDescription);
    });
