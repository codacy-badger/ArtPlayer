import screenfull from 'screenfull';

export default function fullscreenMix(art, player) {
    const {
        i18n,
        notice,
        events: { destroyEvents },
        template: { $player },
    } = art;

    const screenfullChange = () => {
        art.emit('fullscreen:change', screenfull.isFullscreen);
    };

    const screenfullError = () => {
        notice.show(i18n.get('This does not seem to support full screen functionality'));
    };

    try {
        screenfull.on('change', screenfullChange);
        screenfull.on('error', screenfullError);
        destroyEvents.push(() => {
            screenfull.off('change', screenfullChange);
            screenfull.off('error', screenfullError);
        });
    } catch (error) {
        screenfullError();
    }

    Object.defineProperty(player, 'fullscreenState', {
        get: () => screenfull.isFullscreen,
    });

    Object.defineProperty(player, 'fullscreenEnabled', {
        value: () => {
            if (screenfull.enabled) {
                if (!player.fullscreenState) {
                    player.fullscreenWebExit();
                    screenfull.request($player).then(() => {
                        $player.classList.add('artplayer-fullscreen');
                        player.aspectRatioReset();
                        art.emit('fullscreen:enabled');
                    });
                }
            } else {
                screenfullError();
            }
        },
    });

    Object.defineProperty(player, 'fullscreenExit', {
        value: () => {
            if (screenfull.enabled) {
                if (player.fullscreenState) {
                    player.fullscreenWebExit();
                    screenfull.exit().then(() => {
                        $player.classList.remove('artplayer-fullscreen');
                        player.aspectRatioReset();
                        art.emit('fullscreen:exit');
                    });
                }
            } else {
                screenfullError();
            }
        },
    });

    Object.defineProperty(player, 'fullscreenToggle', {
        value: () => {
            if (player.fullscreenState) {
                player.fullscreenExit();
            } else {
                player.fullscreenEnabled();
            }
        },
    });
}
